package models

import "time"

// User object for saving in db
type User struct {
	ID        int    	`json:"-"`
	UserName  string 	`json:"user_name"`
	FirstName string 	`json:"first_name"`
	LastName  string 	`json:"last_name"`
	Email     string 	`json:"email"`
	Password  string    `json:"-"`
	CreatedAt time.Time `json:"-"`
    UpdatedAt time.Time `json:"-"`
}