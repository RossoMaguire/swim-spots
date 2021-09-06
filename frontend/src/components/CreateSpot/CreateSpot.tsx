import React, { useState } from "react";
import axios from "axios";
import history from "../../history";

interface ICreateSpotProps {
  user: string | null;
}

const CreateSpot = (props: ICreateSpotProps): React.ReactElement => {
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios
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
        history.push("/feed");
      })
      .catch((err) => {
        console.log(err);
        const msg = document.getElementById("create-error-msg");
        msg!.style.display = "block";
      });
  };

  return (
    <div className="ui grid container">
      <div className="sixteen wide column">
        <h1>Post a Spot</h1>
      </div>
      <form className="ui large form" onSubmit={handleSubmit}>
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleNameChange}
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
    </div>
  );
};

export default CreateSpot;
