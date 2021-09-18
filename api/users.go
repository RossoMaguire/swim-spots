package api

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"golang.org/x/crypto/bcrypt"

	"github.com/RossoMaguire/swim-spots/api/middleware"
	"github.com/RossoMaguire/swim-spots/db"
	"github.com/RossoMaguire/swim-spots/models"
	"github.com/gorilla/mux"
)

// Will READ all users
func GetAllUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	} else {

	var users []models.User
	db.Connector.Find(&users)
	w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)
	json.NewEncoder(w).Encode(users)

	}
}

// Will READ a single user by ID
func GetUserById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	} else {
	vars := mux.Vars(r)
	key := vars["id"]

	var user []models.User
	db.Connector.Find(&user, key)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(user)
	}
}

// Will READ a single user by username
func CreateLoginByUserName(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	} else {

	requestBody, _ := ioutil.ReadAll(r.Body)

	var credentials map[string]interface{}
	
    err := json.Unmarshal(requestBody, &credentials)
    if err != nil {
        panic(err)
	}

	var user models.User

	if result := db.Connector.Find(&user, "user_name = ?", credentials["user_name"])
	result.Error != nil {
		w.WriteHeader(http.StatusNotFound)
		panic(err)
	}

	if result := db.Connector.Find(&user, "password = ?", credentials["password"])
	result.Error != nil {
		w.WriteHeader(http.StatusNotFound)
		panic(err)
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(user)

	}
}

// Will CREATE a user
func CreateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	} else {
    requestBody, _ := ioutil.ReadAll(r.Body)

	var user models.User
	err := json.Unmarshal(requestBody, &user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// hash the password using the bcrypt lib
	// The second argument is the cost of hashing, which is set as 8 (this value can be more or less, depending on the computing power needed)
	hashed, _ := bcrypt.GenerateFromPassword([]byte(user.Password), 8)

	user.Password = string(hashed)
	fmt.Println(user)

	db.Connector.Create(&user)

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(user.UserName)
	}
}
