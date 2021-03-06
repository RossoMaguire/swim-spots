import React, { useState, useEffect } from "react";
import dynamicSort from "../utils/DynamicSort";
import UserNamePanel from "./UserNamePanel";
import SearchPanel from "./SearchPanel";
import SortPanel from "./SortPanel";
import SwimPanel from "./SwimPanel";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import ApiClient from "../repositories/ApiClient";

const useStyles = makeStyles({
  top: {
    marginTop: "60px",
  },
});

const Feed = (props: IFeedProps): React.ReactElement => {
  const classes = useStyles();

  const [swimSpots, setSwimSpots] = useState([] as ISwimSpot[]);
  const [filteredSpots, setFilteredSpots] = useState(swimSpots);
  const [order, setOrder] = useState(true);
  const [faves, setFaves] = useState([] as Fave[]);
  const [userFaves, setUserFaves] = useState([] as Fave[]);

  const client = new ApiClient();

  useEffect(() => {
    client
      .getSpots("spots")
      .then((res) => {
        console.log("Fetching SwimSpots");
        console.log(res.data);
        setSwimSpots(res.data);
        setFilteredSpots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    client
      .getFavourites("favourites")
      .then((res) => {
        console.log("Fetching Faves");
        console.log(res.data);
        setFaves(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    client
      .getUserFavourites(`favourites/${props.user}`)
      .then((res) => {
        console.log("Fetching UserFaves");
        console.log(res.data);
        setUserFaves(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.user]);

  useEffect(() => {
    toggleOrder();
  }, [filteredSpots]);

  const toggleOrder = (): void => {
    setOrder((value: boolean) => !value);
    order
      ? filteredSpots.sort(dynamicSort("name"))
      : filteredSpots.sort(dynamicSort("-name"));
  };

  // name search mechanism
  const handleNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // as the user types the value in the search field gets sent here
    let value = e.target.value.toLowerCase();
    let result = []; // setup a new array to store the filtered spots
    result = swimSpots.filter((spot) => {
      // use the filter and search JS utilitly functions to
      // create a new array of objects with the result
      return spot.name.toLowerCase().search(value) !== -1;
    });
    setFilteredSpots(result);
  };

  // county search mechanism - see explanation for handle name search
  const handleCountySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = swimSpots.filter((spot) => {
      return spot.county.toLowerCase().search(value) !== -1;
    });
    setFilteredSpots(result);
  };

  const resetSwimSpots = async (newdata: ISwimSpot[]) => {
    await setSwimSpots(newdata);
    setFilteredSpots(newdata);
  };

  return (
    <div className="ui grid container">
      <div className={`sixteen wide column ${classes.top}`}>
        <h1 className="ui dividing header">Welcome to Swim Spots</h1>
      </div>
      <div className="ten wide column">
        <div className="ui items">
          {filteredSpots.map((spot) => (
            <SwimPanel
              key={spot.name}
              id={spot.id}
              name={spot.name}
              desc={spot.description}
              // sanitize coordinates string
              coordinates={spot.coordinates.replace(/\s/g, "")}
              county={spot.county}
              username={spot.user_name}
              faves={faves}
              userFaves={userFaves}
              currentUser={props.user}
              resetSwimSpots={resetSwimSpots}
            />
          ))}
        </div>
      </div>
      <div className="six wide column">
        <UserNamePanel
          currentUser={props.user}
          handleLogout={props.handleLogout}
        />
        <SearchPanel handleSearch={handleNameSearch} searchBy="Name" />
        <SearchPanel handleSearch={handleCountySearch} searchBy="County" />
        <SortPanel order={order} toggleOrder={toggleOrder} />

        <Link to="/create">
          <button className="ui primary button">
            <i className="add icon"></i>
            Add a New Swim Spot
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Feed;
