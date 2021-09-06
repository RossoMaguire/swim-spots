import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamicSort from "../utils/DynamicSort";
import SearchPanel from "./SearchPanel";
import SortPanel from "./SortPanel";
import SwimPanel from "./SwimPanel";

interface ISwimSpot {
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
  const [order, setOrder] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/spots")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSwimSpots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    order
      ? swimSpots.sort(dynamicSort("name"))
      : swimSpots.sort(dynamicSort("-name"));
  }, [order, swimSpots]);

  const toggleOrder = (): void => setOrder((value) => !value);

  return (
    <div className="ui grid container">
      <div className="sixteen wide column">
        <h1>Welcome to Swim Spots!</h1>
      </div>
      <div className="twelve wide column">
        <div className="ui items">
          {swimSpots.map((spot) => (
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
      <div className="four wide column">
        <p onClick={props.handleLogout} style={{ cursor: "pointer" }}>
          Logout
        </p>
        <SearchPanel />
        <SortPanel order={order} toggleOrder={toggleOrder} />
        <p>
          <a href="/create">Add a New Swim Spot</a>
        </p>
      </div>
    </div>
  );
};

export default Feed;
