import axios from "axios";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  highlight: {
    color: "pink",
  },
});

const SwimPanel = (props: ISwimPanelProps): React.ReactElement => {
  const classes = useStyles();

  const [faveCount, setFaveCount] = useState(0);
  const [favedByUser, setFavedByUser] = useState(false);

  useEffect(() => {
    const countFaves = (): number => {
      const amount = props.faves.filter((fave) =>
        Object.values(fave).includes(props.name)
      ).length;
      return amount;
    };
    setFaveCount(countFaves());
  }, [props.faves, props.name]);

  const postFavourite = (): void => {
    if (favedByUser) {
      return;
    } else {
      axios
        .post("http://localhost:8090/api/favourites/create", {
          user_name: props.currentUser,
          swim_spot_name: props.name,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setFaveCount(faveCount + 1);
          setFavedByUser(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="item" style={{ marginBottom: "40px" }}>
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
          <span>{props.county}</span>
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
            className={favedByUser ? classes.highlight : undefined}
          >
            <i className="heart icon"></i>
            {`${faveCount} favourites`}
          </span>
          {` | Posted by ${props.username}`}
        </div>
      </div>
    </div>
  );
};

export default SwimPanel;
