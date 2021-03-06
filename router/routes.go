package router

import (
	"github.com/RossoMaguire/swim-spots/api"
	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter().StrictSlash(true);

	// Handle User Registration & Login
	router.HandleFunc("/api/users/register", api.CreateUser).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/users/login", api.CreateLoginByUserName).Methods("POST", "OPTIONS")

	// CRUD Users
	router.HandleFunc("/api/users", api.GetAllUsers).Methods("GET", "OPTIONS");
	router.HandleFunc("/api/users/{id}", api.GetUserById).Methods("GET", "OPTIONS");
	

	// CRUD Swim Spots
	router.HandleFunc("/api/spots", api.GetAllSwimSpots).Methods("GET", "OPTIONS");
	router.HandleFunc("/api/spots/create", api.CreateSpot).Methods("POST", "OPTIONS");
	router.HandleFunc("/api/spots/delete/{id}", api.DeleteSpot).Methods("DELETE", "OPTIONS");

	// CRUD Favourites
    router.HandleFunc("/api/favourites", api.GetAllFavourites).Methods("GET", "OPTIONS");
	router.HandleFunc("/api/favourites/create", api.CreateFavourite).Methods("POST");
	router.HandleFunc("/api/favourites/{user_name}", api.GetAllFavouritesByUser).Methods("GET", "OPTIONS");

	return router
}