package main

import (
	"log"
	"os"

	"github.com/RossoMaguire/swim-spots/db"

	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
  
	// Grabbing env variables for connection string
	config :=
		db.Config{
			Server: os.Getenv("DBServer"),
			User:   os.Getenv("DBUser"),
			DB:     os.Getenv("DBNAME"),
		}

	connectionString := db.GetConnectionString(config)
	err = db.Connect(connectionString)
	if err != nil {
		panic(err.Error())
	}
}