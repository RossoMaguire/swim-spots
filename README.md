# Swim Spots

Swim Spots is an application which allows users to post co-ordinates of awesome places they find around Ireland for a swim. Users can login to the app to share a spot, access all other users shared swim spots, favourite certain swim spots and find co-ordinates.

### Built With

API and backend is built with Go 1.16.6.
Remote DB is built with Postres and hosted with Heroku.
Frontend is built with React and TypeScript.

## Getting Started -- follow these steps to run locally

1. Clone this repo and then cd into the base directory. From there run `go mod vendor` to install dependencies.

2. To install frontend dependencies cd into frontend and from there run `npm install` ot `yarn`.

3. The DB connection reads from Environment variables for connecting to the database which is hosted on Heroku.
   Create a .env file in the base directory - refer to the report for the values you will need for these keys :

```
DBSERVER=
DBNAME=
DBUSER=
DBPASS=
```

Copy the values after the equals and save the .env file in the root of the project.
The connection string in the app will read these and open the connection to the database.

_a .env file that you can copy in will be provided with the submission on Moodle._

### Start the project

To open the connection to the db and to run the api & web server :

```
cd swim-spots
go run main.go

```

Visit the build UI on `localhost:8090` to use the website.

An example account login can be:

```
Username: rossmag17
Password: test

```

### Testing

To run tests

```
cd frontend
npm test FileName.test.js

```

**Example:** `npm test CreateSpot.test.js`

To make API requests via curl or Postman, refer to the endpoints in `routes.go`.

### Development

To start the frontend in development:

```
cd frontend
yarn start

```

Whenever there are changes made to the backend or api (GO files) you need to restart the server

```
cd swim-spots
go run main.go

```
