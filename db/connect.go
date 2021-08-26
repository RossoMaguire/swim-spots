package db

import (
	"log"

	"github.com/jinzhu/gorm"
)

// Connector variable used for CRUD operation's against db
var Connector *gorm.DB

// Creates MySQL connection
func Connect(connectionString string) error {
	var err error
	Connector, err = gorm.Open("postgres", connectionString)
	if err != nil {
		return err
	}
	log.Println("Database connection successfull")
	return nil
}