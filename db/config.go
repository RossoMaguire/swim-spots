package db

import "fmt"

// Config to maintain DB configuration properties
type Config struct {
	Server string
	User   string
	Pass   string
	DB     string
}

// Building the connection string
var GetConnectionString = func(config Config) string {
	connectionString := fmt.Sprintf("postgres://%s:%s@%s/%s?sslmode=require", config.User, config.Pass, config.Server, config.DB)
	return connectionString
}