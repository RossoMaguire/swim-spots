package api

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/RossoMaguire/swim-spots/db"
	"github.com/RossoMaguire/swim-spots/models"
	"github.com/gorilla/mux"
)

// Will READ all favourites
func GetAllFavourites(w http.ResponseWriter, r *http.Request) {
	var favourites []models.Favourite
	db.Connector.Find(&favourites)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(favourites)
}

// Will READ all favourites by user id
func GetAllFavouritesByUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["user_id"]

	var favourites []models.Favourite

	db.Connector.Find(&favourites, "user_id = ?", key)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(favourites)
}

// Will CREATE a favourite 
func CreateFavourite(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var favourite models.Spot
	json.Unmarshal(requestBody, &favourite)

	db.Connector.Create(&favourite)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(favourite)
}