import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import history from "../../history";

const useStyles = makeStyles({
  top: {
    marginTop: "60px",
  },
});

const CreateSpot = (props: ICreateSpotProps): React.ReactElement => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [county, setCounty] = useState("");
  const [coordinates, setCoordinates] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  const handleCountyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCounty(e.target.value);
  };

  const handleCoordinatesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoordinates(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const msg = document.getElementById("create-error-msg");

    if (validateForm()) {
      await axios
        .post("http://localhost:8090/api/spots/create", {
          user_name: props.user,
          name: name,
          description: desc,
          county: county,
          coordinates: coordinates,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          msg!.style.display = "block";
        });

      history.push("/feed");
    } else {
      msg!.style.display = "block";
    }
  };

  const validateForm = () => {
    let valid: boolean = false;
    if (name === "" || desc === "" || county === "" || coordinates === "") {
      valid = true;
    }
    return valid;
  };

  return (
    <div className="ui grid container">
      <div className={`sixteen wide column ${classes.top}`}>
        <h1>Post a Spot</h1>
      </div>
      <div className="ten wide column">
        <form className="ui large form" onSubmit={handleSubmit}>
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleNameChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleDescChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <input
                  type="text"
                  name="county"
                  placeholder="County"
                  onChange={handleCountyChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <input
                  type="text"
                  name="coordinates"
                  placeholder="Coordinates"
                  onChange={handleCoordinatesChange}
                  required
                />
              </div>
            </div>
            <input
              type="submit"
              value="Create"
              className="ui fluid large teal submit button"
            />
          </div>

          <div id="create-error-msg" className="ui error message">
            Please fill out all the information.
          </div>
        </form>
        <p>
          To get the coordinates visit your spot on google maps, drop a pin and
          right click to copy the coordinates. Just paste them as is in the
          field above.
        </p>
      </div>
      <div className="six wide column">
        <img
          alt="Swim Spot Ireland"
          src="assets/images/swim-spot.jpeg"
          className="image"
        />
      </div>
    </div>
  );
};

export default CreateSpot;
