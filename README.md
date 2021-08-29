# Swim Spots

Swim Spots is an application which allows users to post co-ordinates of awesome places they find around Ireland for a swim. Users can login to the app to share a spot, access all other users shared swim spots, favourite certain swim spots and find co-ordinates.

### Built With

Swim Spots is built with Go 1.16.6

## Getting Started

Clone this repo and then cd into the base directory. From there run `go mod vendor` to install dependencies.

### Database

Ensure you have [Postgres](https://www.postgresql.org/) installed on your machine.
Start Postgres and create a database called **swim_spots** :

```
CREATE DATABASE "swim_spots";
```

The DB connection reads from Env variables for connecting to the database but you can use the default user `postgres` with no password for quick start.

Ceate a .env file in the base directory - for default connection insert the following details :

```
DBSERVER=localhost:5432
DBNAME=swim_spots
DBUSER=postgres
```

The connection string in the app will read these and open the connection to the database.
To test the connection to the db and to run the api server :

```
go run main.go
```

Install test data once the db is created and accepting connections by running the following from the base directory of the repo in the terminal :

```
psql -U postgres -d swim_spots -a -f db/setup/init.sql
psql -U postgres -d swim_spots -a -f db/setup/test_data.sql
```
