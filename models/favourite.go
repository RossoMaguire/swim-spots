package models

// SwimSpot object for saving in db
type Favourite struct {
	ID           int       `json:"id"`
	UserName     string    `json:"user_name"`
	SwimSpotName string    `json:"swim_spot_name"`
}