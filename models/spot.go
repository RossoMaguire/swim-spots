package models

// SwimSpot object for saving in db
type Spot struct {
	ID           int       `json:"id"`
	UserName     string     `json:"user_name"`
	Name         string    `json:"name"`
	Description  string    `json:"description"`
	County       string    `json:"county"`
	Coordinates  string    `json:"coordinates"`
}