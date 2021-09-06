import axios from "axios";
import React, { useState, useEffect } from "react";

interface ISwimPanelProps {
  name: string;
  county: string;
  desc: string;
  coordinates: string;
  username: string;
}

type Fave = {
  id: number;
  user_name: string;
  swim_spot_name: string;
};

const SwimPanel = (props: ISwimPanelProps): React.ReactElement => {
  const [faves, setFaves] = useState([] as Fave[]);
  const [faveCount, setFaveCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/favourites")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data);
        setFaves(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const countFaves = (): number => {
      const amount = faves.filter((fave) =>
        Object.values(fave).includes(props.name)
      ).length;
      return amount;
    };
    setFaveCount(countFaves());
  }, [faves, props.name]);

  const postFavourite = () => {
    axios
      .post("http://localhost:8090/api/favourites/create", {
        user_name: props.username,
        swim_spot_name: props.name,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setFaveCount(faveCount + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="item">
      <div className="content">
        <a
          className="header"
          href={`https://www.google.com/maps/search/?api=1&query=${props.coordinates}`}
          target="_blank"
          rel="noreferrer"
        >
          {props.name}
        </a>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p>{props.desc}</p>
        </div>
        <div className="extra">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${props.coordinates}`}
            target="_blank"
            rel="noreferrer"
          >
            Find on map
          </a>
        </div>
        <div className="extra">
          <span
            onClick={postFavourite}
            style={{ cursor: "pointer" }}
          >{`${faveCount} favourites`}</span>
          {` | Posted by ${props.username}`}
        </div>
      </div>
    </div>
  );
};

export default SwimPanel;
