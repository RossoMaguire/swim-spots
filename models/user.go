package models

import "time"

// User object for saving in db
type User struct {
	ID        int    `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	CreatedAt    time.Time `json:"created"`
    UpdatedAt    time.Time `json:"updated"`
}