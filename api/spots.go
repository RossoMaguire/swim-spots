package api

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/RossoMaguire/swim-spots/db"
	"github.com/RossoMaguire/swim-spots/models"
	"github.com/gorilla/mux"
)

// Will READ all swim spots
func GetAllSwimSpots(w http.ResponseWriter, r *http.Request) {
	var spots []models.Spot
	db.Connector.Find(&spots)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(spots)
}

// Will READ a single swim spot
func GetSwimSpotById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	var spot models.Spot
	db.Connector.First(&spot, key)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(spot)
}

// Will CREATE a swim spot
func CreateSpot(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var spot models.Spot
	json.Unmarshal(requestBody, &spot)

	db.Connector.Create(&spot)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(spot)
}