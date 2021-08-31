package router

import (
	"github.com/RossoMaguire/swim-spots/api"
	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter().StrictSlash(true);

	// Handle User Registration & Login
	router.HandleFunc("/api/users/{user_name}/login", api.GetUserByUserName).Methods("GET")
	router.HandleFunc("/api/users/signup", api.CreateUser).Methods("POST");

	// CRUD Users
	router.HandleFunc("/api/users", api.GetAllUsers).Methods("GET");
	router.HandleFunc("/api/users/{id}", api.GetUserById).Methods("GET");
	

	// CRUD Swim Spots
	router.HandleFunc("/api/spots", api.GetAllSwimSpots).Methods("GET");
	router.HandleFunc("/api/spots/{id}", api.GetSwimSpotById).Methods("GET");
	router.HandleFunc("/api/spots/create", api.CreateSpot).Methods("POST");

	// CRUD Favourites
    router.HandleFunc("/api/favourites", api.GetAllFavourites).Methods("GET");
	router.HandleFunc("/api/favourites/{user_id}", api.GetAllFavouritesByUser).Methods("GET");

	return router
}