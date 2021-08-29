package models

import "time"

// SwimSpot object for saving in db
type Favourite struct {
	ID           int       `json:"id"`
	UserID       int       `json:"userid"`
	SwimSpotID   int       `json:"swimspotid"`
	SwimSpotName string    `json:"name"`
	CreatedAt    time.Time `json:"created"`
    UpdatedAt    time.Time `json:"updated"`
}