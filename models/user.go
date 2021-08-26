package models

import "time"

// User object for saving in db
type User struct {
	ID        int    `json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	CreatedAt    time.Time `json:"created"`
    UpdatedAt    time.Time `json:"updated"`
}