package models

import "time"

// SwimSpot object for saving in db
type Favourite struct {
	ID           int       `json:"id"`
	UserID       int       `json:"user_id"`
	SwimSpotID   int       `json:"swim_spot_id"`
	SwimSpotName string    `json:"swim_spot_name"`
	CreatedAt    time.Time `json:"created"`
    UpdatedAt    time.Time `json:"updated"`
}