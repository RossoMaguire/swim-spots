# Swim Spots

Swim Spots is an application which allows users to post co-ordinates of awesome places they find around Ireland for a swim. Users can login to the app to share a spot, access all other users shared swim spots, favourite certain swim spots and find co-ordinates.

_View a production build on Heroku :_ https://swim-spots.herokuapp.com/login

An example account login can be :

```
Username: rossmag17
Password: test
```

### Built With

```
API and backend : Go 1.16.6.
Cloud DB : Postgres hosted with Heroku.
Frontend : React and TypeScript.
```

## Getting Started -- follow these steps to run locally

_Please ensure you have GO and Node installed on your machine_

1. Clone this repo and then `cd swim spots`. From there run `go mod vendor` to install dependencies.

2. To install frontend dependencies `cd frontend` and from there run `npm install` or `yarn`.

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

Visit the build on `localhost:8090` to use the website.

An example account login can be :

```
Username: rossmag17
Password: test
```

_logging in with a register account won't work as passwords are hashed on register, but not for the test accounts, and retreving a hash has not been included_

### Testing

To run tests

```
cd frontend
npm test FileName.test.js
```

_Example :_ `npm test CreateSpot.test.js`

To make API requests via curl or Postman, refer to the endpoints in :

`routes.go`.

### Development

To start the frontend in development :

```
cd frontend
yarn start
```

Whenever there are changes made to the backend or api (GO files) you need to restart the server :

```
cd swim-spots
go run main.go
```
