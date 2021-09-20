package api

import (
	"encoding/json"
	"fmt"
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
	json.NewEncoder(w).Encode(spots)
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
	json.Unmarshal(requestBody, &spot)
	fmt.Println("Api Called")

	db.Connector.Create(&spot)
	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(spot)
	}
}


// Will DELETE a swim spot
func DeleteSpot(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
	key := vars["id"]

	var spot models.Spot
	db.Connector.Delete(&spot, key)
	w.Header().Set("Content-Type", "application/json")
	middleware.AddCorsHeader(w)
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	} else {
    var spots []models.Spot
	db.Connector.Find(&spots)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(spots)
	}
}