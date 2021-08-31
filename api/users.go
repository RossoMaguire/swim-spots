package api

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/RossoMaguire/swim-spots/db"
	"github.com/RossoMaguire/swim-spots/models"
	"github.com/gorilla/mux"
)

type CreateUserResponse struct {
	UserName  string `json:"user_name"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
}

// Will READ all users
func GetAllUsers(w http.ResponseWriter, r *http.Request) {
	var users []models.User
	db.Connector.Find(&users)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(users)
}

// Will READ a single user by ID
func GetUserById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	var user []models.User
	db.Connector.Find(&user, key)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(user)
}

// Will READ a single user by email
func GetUserByUserName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["user_name"]
	fmt.Println(key)

	var user []models.User
	db.Connector.Find(&user, "user_name = ?", key)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(user)
}


// Will CREATE a user
func CreateUser(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var user models.User
	json.Unmarshal(requestBody, &user)
	db.Connector.Create(&user)

	var response CreateUserResponse
	json.Unmarshal(requestBody, &response)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(response)
}

