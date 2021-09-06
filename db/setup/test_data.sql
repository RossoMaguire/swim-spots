/* Users */
INSERT INTO users("user_name", "first_name", "last_name", "email", "password")
VALUES ('rossmag17', 'Ross', 'Maguire', 'ross@example.com', 'test');

INSERT INTO users("user_name", "first_name", "last_name", "email", "password")
VALUES ('jhondoe', 'John', 'Doe', 'john@example.com', 'test');

INSERT INTO users("user_name", "first_name", "last_name", "email", "password")
VALUES ('janedoe', 'Jane', 'Doe', 'jane@example.com', 'test');

/* Swim Spots */
INSERT INTO spots("user_name", "name", "description", "county", "coordinates", "favourites")
VALUES ('rossmag17', 'White Rock Beach', 'Beautiful hidden cove at the bottom of Killiney Hill', 'Dublin', '53.26597235034502, -6.106492615137967', 2);

INSERT INTO spots("user_name", "name", "description", "county", "coordinates", "favourites")
VALUES ('jhondoe', 'Howth Cliff', 'Beautiful hidden beach at the bottom of Howth Cliff Walk', 'Dublin', '53.366605266537, -6.054435157230126', 1);

INSERT INTO spots("user_name", "name", "description", "county", "coordinates", "favourites")
VALUES ('janedoe', 'Lough Derg', 'Tranquil Lake in Clare', 'Clare', '52.914367841147964, -8.400402272585476', 1);

/* Favourites */
INSERT INTO favourites("user_name", "swim_spot_name")
VALUES ('rossmag17', 'White Rock Beach');

INSERT INTO favourites("user_name", "swim_spot_name")
VALUES ('rossmag17', 'Howth Cliff');

INSERT INTO favourites("user_name", "swim_spot_name")
VALUES ('jhondoe', 'White Rock Beach');

INSERT INTO favourites("user_name", "swim_spot_name")
VALUES ('janedoe', 'Lough Derg');

