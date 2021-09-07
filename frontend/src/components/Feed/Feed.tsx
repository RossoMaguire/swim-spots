import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamicSort from "../utils/DynamicSort";
import SearchPanel from "./SearchPanel";
import SortPanel from "./SortPanel";
import SwimPanel from "./SwimPanel";

export interface ISwimSpot {
  name: string;
  county: string;
  description: string;
  coordinates: string;
  favourites: number;
  user_name: string;
}

interface IFeedProps {
  handleLogout: React.MouseEventHandler;
}

const Feed = (props: IFeedProps): React.ReactElement => {
  const [swimSpots, setSwimSpots] = useState([] as ISwimSpot[]);
  const [filteredSpots, setFilteredSpots] = useState(swimSpots);
  const [order, setOrder] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/spots")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSwimSpots(res.data);
        setFilteredSpots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    order
      ? filteredSpots.sort(dynamicSort("name"))
      : filteredSpots.sort(dynamicSort("-name"));
  }, [order, filteredSpots]);

  const toggleOrder = (): void => setOrder((value) => !value);

  const handleNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = swimSpots.filter((spot) => {
      return spot.name.toLowerCase().search(value) !== -1;
    });
    setFilteredSpots(result);
  };

  const handleCountySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = swimSpots.filter((spot) => {
      return spot.county.toLowerCase().search(value) !== -1;
    });
    setFilteredSpots(result);
  };

  return (
    <div className="ui grid container">
      <div className="sixteen wide column">
        <h1>Welcome to Swim Spots!</h1>
      </div>
      <div className="ten wide column">
        <div className="ui items">
          {filteredSpots.map((spot) => (
            <SwimPanel
              key={spot.name}
              name={spot.name}
              desc={spot.description}
              // sanitze coordinates string
              coordinates={spot.coordinates.replace(/\s/g, "")}
              county={spot.county}
              username={spot.user_name}
            />
          ))}
        </div>
      </div>
      <div className="six wide column">
        <div className="item">
          <p onClick={props.handleLogout} style={{ cursor: "pointer" }}>
            Logout
          </p>
        </div>
        <SearchPanel handleSearch={handleNameSearch} searchBy="Name" />
        <SearchPanel handleSearch={handleCountySearch} searchBy="County" />
        <SortPanel order={order} toggleOrder={toggleOrder} />
        <p>
          <a href="/create">Add a New Swim Spot</a>
        </p>
      </div>
    </div>
  );
};

export default Feed;
