# Swim Spots

Swim Spots is an application which allows users to post co-ordinates of awesome places they find around Ireland for a swim. Users can login to the app to share a spot, access all other users shared swim spots, favourite certain swim spots and find co-ordinates.

### Built With

API and backend is built with Go 1.16.6.
Remote DB is built with Postres and hosted with Heroku.
Frontend is built with React and TypeScript.

## Getting Started

Clone this repo and then cd into the base directory. From there run `go mod vendor` to install dependencies.
To install frontend dependencies cd into frontend and from there run `npm install` ot `yarn`.

### Database

The DB connection reads from Environment variables for connecting to the database which is hosted on Heroku.
Create a .env file in the base directory - refer to the report for the values you will need for these keys :

```
DBSERVER=
DBNAME=
DBUSER=
DBPASS=
```

The connection string in the app will read these and open the connection to the database.

### Start the project

To open the connection to the db and to run the api server :

```
go run main.go
```

To start the frontend:

```
cd frontend
yarn start
```

Visit the frontend UI on `localhost:3000` to use the website.
An example account login can be found in the report.

To make API requests via curl or Postman, refer to the endpoints in `routes.go`.
