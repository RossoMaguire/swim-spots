/* Users */
INSERT INTO users("first_name", "last_name", "email", "password", "created_at", "updated_at")
VALUES ('Ross', 'Maguire', 'ross@example.com', 'test', '2021-02-12 15:32:21', '2021-04-12 15:32:21' );

INSERT INTO users("first_name", "last_name", "email", "password", "created_at", "updated_at")
VALUES ('John', 'Doe', 'john@example.com', 'test', '2021-02-12 15:32:21', '2021-04-12 15:32:21' );

INSERT INTO users("first_name", "last_name", "email", "password", "created_at", "updated_at")
VALUES ('Jane', 'Doe', 'jane@example.com', 'test', '2021-02-12 15:32:21', '2021-04-12 15:32:21' );

/* Swim Spots */
INSERT INTO spots("user_id", "name", "description", "county", "coordinates", "favourites", "created_at", "updated_at")
VALUES (1, 'White Rock Beach', 'Beautiful hidden cove at the bottom of Killiney Hill', 'Dublin', '53.26597235034502, -6.106492615137967', 2, '2021-02-12 15:32:21', '2021-04-12 15:32:21' );

INSERT INTO spots("user_id", "name", "description", "county", "coordinates", "favourites", "created_at", "updated_at")
VALUES (2, 'Howth Cliff', 'Beautiful hidden beach at the bottom of Howth Cliff Walk', 'Dublin', '53.366605266537, -6.054435157230126', 1, '2021-02-12 15:32:21', '2021-04-12 15:32:21' );

INSERT INTO spots("user_id", "name", "description", "county", "coordinates", "favourites", "created_at", "updated_at")
VALUES (3, 'Lough Derg', 'Tranquil Lake in Clare', 'Clare', '52.914367841147964, -8.400402272585476', 1, '2021-02-12 15:32:21', '2021-04-12 15:32:21' );

/* Favourites */
INSERT INTO favourites("user_id", "spot_id", "spot_name", "created_at", "updated_at")
VALUES (1, 1, 'White Rock Beach', '2021-02-12 15:32:21', '2021-04-12 15:32:21' );

INSERT INTO favourites("user_id", "spot_id", "spot_name", "created_at", "updated_at")
VALUES (1, 2, 'Howth Cliff', '2021-02-12 15:32:21', '2021-04-12 15:32:21' );

INSERT INTO favourites("user_id", "spot_id", "spot_name", "created_at", "updated_at")
VALUES (2, 1, 'White Rock Beach', '2021-02-12 15:32:21', '2021-04-12 15:32:21' );

INSERT INTO favourites("user_id", "spot_id", "spot_name", "created_at", "updated_at")
VALUES (3, 3, 'Lough Derg', '2021-02-12 15:32:21', '2021-04-12 15:32:21' );

