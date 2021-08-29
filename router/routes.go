package router

import (
	"github.com/RossoMaguire/swim-spots/api"
	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter().StrictSlash(true);

	// CRUD Users
	router.HandleFunc("/api/users", api.GetAllUsers).Methods("GET");
	router.HandleFunc("/api/users/{id}", api.GetUserById).Methods("GET");
	router.HandleFunc("/api/users/create", api.CreateUser).Methods("POST");

	// CRUD Swim Spots
	router.HandleFunc("/api/spots", api.GetAllSwimSpots).Methods("GET");
	router.HandleFunc("/api/spots/{id}", api.GetSwimSpotById).Methods("GET");
	router.HandleFunc("/api/spots/create", api.CreateSpot).Methods("POST");

	// CRUD Favourites
    router.HandleFunc("/api/favourites", api.GetAllFavourites).Methods("GET");
	router.HandleFunc("/api/favourites/{user_id}", api.GetAllFavouritesByUser).Methods("GET");

	return router
}