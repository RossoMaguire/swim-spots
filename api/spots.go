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

// Will READ all swim spots
func GetAllSwimSpots(w http.ResponseWriter, r *http.Request) {
	var spots []models.Spot
	db.Connector.Find(&spots)
	w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	} else {
	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(spots)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	    return
	} 
	}
}

// Will CREATE a swim spot
func CreateSpot(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	} else {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var spot models.Spot
	err := json.Unmarshal(requestBody, &spot)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	return
	}

	db.Connector.Create(&spot)
	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(http.StatusCreated)
	err = json.NewEncoder(w).Encode(spot)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	    return
	} 
	}
}


// Will DELETE a swim spot
func DeleteSpot(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
	key := vars["id"]

	var spot models.Spot
	err := db.Connector.Delete(&spot, key)
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
    var spots []models.Spot
	db.Connector.Find(&spots)
	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(spots)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	    return
	} 
	}
}