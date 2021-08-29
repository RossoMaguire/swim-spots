package main

import (
	"log"
	"net/http"
	"os"

	"github.com/RossoMaguire/swim-spots/db"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
)

func main() {
	initDB()
	log.Println("Starting the HTTP server on port 8090")

	router := mux.NewRouter().StrictSlash(true)
	log.Fatal(http.ListenAndServe(":8090", router))
}

func initDB() {
	// Connect to godotenv
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
  
	// Grabbing env variables for connection string using godotenv
	config :=
		db.Config{
			Server: os.Getenv("DBServer"),
			User:   os.Getenv("DBUser"),
			DB:     os.Getenv("DBNAME"),
		}

	connectionString := db.GetConnectionString(config)

	// Connect to the db 
	err = db.Connect(connectionString)
	if err != nil {
		panic(err.Error())
	}
}