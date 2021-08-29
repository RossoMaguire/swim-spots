package models

import "time"

// SwimSpot object for saving in db
type Spot struct {
	ID           int       `json:"id"`
	UserID       int       `json:"user_id"`
	Name         string    `json:"name"`
	Description  string    `json:"description"`
	County       string    `json:"county"`
	Coordinates  string    `json:"coordinates"`
	Favourites   int       `json:"favourites"`
	CreatedAt    time.Time `json:"created"`
    UpdatedAt    time.Time `json:"updated"`
}