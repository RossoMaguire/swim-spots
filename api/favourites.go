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

// Will READ all favourites
func GetAllFavourites(w http.ResponseWriter, r *http.Request) {
	var favourites []models.Favourite
	err := db.Connector.Find(&favourites)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	return
	} 
	w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	} else {

	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(favourites)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	    return
	} 
	}
}

// Will READ all favourites by user id
func GetAllFavouritesByUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["user_name"]

	var favourites []models.Favourite

	err := db.Connector.Find(&favourites, "user_name = ?", key)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	return
	} 
	w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	} else {
	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(favourites)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	    return
	} 
	}
}

// Will CREATE a favourite 
func CreateFavourite(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var favourite models.Favourite
	err := json.Unmarshal(requestBody, &favourite)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	return
	} 

	db.Connector.Create(&favourite)
    w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	} else {
	w.WriteHeader(http.StatusCreated)
	err = json.NewEncoder(w).Encode(favourite)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	    return
	} 
	}
}