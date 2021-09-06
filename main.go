package main

import (
	"log"
	"net/http"
	"os"

	"github.com/RossoMaguire/swim-spots/db"
	"github.com/RossoMaguire/swim-spots/router"
	"github.com/RossoMaguire/swim-spots/server"

	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
)


func main() {
	initDB()
	log.Println("Starting the HTTP server on port 8090")

	r := router.Router()

	// Pass the frontend to the http server
	spa := server.SpaHandler{StaticPath: "frontend/build", IndexPath: "index.html"}
	
	r.PathPrefix("/").Handler(spa)

	log.Fatal(http.ListenAndServe(":8090", r))
}

func initDB() {
	// Connect to godotenv
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
  
	// Grabbing env variables for connection string using godotenv
	config :=
		db.Config{
			Server: os.Getenv("DBSERVER"),
			User:   os.Getenv("DBUSER"),
			Pass:   os.Getenv("DBPASS"),
			DB:     os.Getenv("DBNAME"),
		}

	connectionString := db.GetConnectionString(config)

	// Connect to the db 
	err = db.Connect(connectionString)
	if err != nil {
		panic(err.Error())
	}
}