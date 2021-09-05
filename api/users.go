package api

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

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

