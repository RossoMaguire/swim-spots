-- Table Definitions
CREATE TABLE IF NOT EXISTS users (
    "id" serial PRIMARY KEY,
    "first_name" VARCHAR ( 50 ) NOT NULL,
    "last_name" VARCHAR ( 50 ) NOT NULL,
    "email" VARCHAR ( 255 ) UNIQUE NOT NULL,
    "password" VARCHAR ( 50 ) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT now()
);


CREATE TABLE IF NOT EXISTS "public"."spots" (
    "id" serial PRIMARY KEY,
    "user_id" INT NOT NULL,
    "name" VARCHAR ( 50 ) NOT NULL,
    "description" VARCHAR ( 50 ) NOT NULL,
    "county" VARCHAR ( 50 ) NOT NULL,
    "coordinates"  VARCHAR ( 255 ) NOT NULL,
    "favourites" INT,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS "public"."favourites" (
    "id" serial PRIMARY KEY,
    "user_id" INT NOT NULL,
    "spot_id" INT NOT NULL,
    "spot_name" VARCHAR ( 50 ) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (spot_id) REFERENCES spots (id)
);