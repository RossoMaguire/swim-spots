-- Table Definitions
CREATE TABLE IF NOT EXISTS "public"."users" (
    "id" serial PRIMARY KEY,
    "user_name" VARCHAR ( 50 ) UNIQUE NOT NULL,
    "first_name" VARCHAR ( 50 ) NOT NULL,
    "last_name" VARCHAR ( 50 ) NOT NULL,
    "email" VARCHAR ( 255 ) UNIQUE NOT NULL,
    "password" VARCHAR ( 50 ) NOT NULL
);


CREATE TABLE IF NOT EXISTS "public"."spots" (
    "id" serial PRIMARY KEY,
    "user_name" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "county" VARCHAR ( 50 ) NOT NULL,
    "coordinates"  VARCHAR ( 255 ) NOT NULL,
    "favourites" INT
);

CREATE TABLE IF NOT EXISTS "public"."favourites" (
    "id" serial PRIMARY KEY,
    "user_id" INT NOT NULL,
    "swim_spot_id" INT NOT NULL,
    "swim_spot_name" VARCHAR NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (swim_spot_id) REFERENCES spots (id)
);