import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import history from "../../history";
import { Link } from "react-router-dom";
import ApiClient from "../repositories/ApiClient";

const useStyles = makeStyles({
  centeredForm: {
    margin: "0 auto",
    width: "70%",
  },
});

const Register = (): React.ReactElement => {
  const classes = useStyles();

  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const client = new ApiClient();

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    client
      .createRegister("users/register", {
        user_name: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        const msg = document.getElementById("register-error-msg");
        msg!.style.display = "block";
      });
  };

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <img
            alt="Swim Spots Logo"
            src="assets/images/wave.png"
            className="image"
          />
          <div className="content">Register for Swim Spots</div>
        </h2>
        <form
          className={`ui large form ${classes.centeredForm}`}
          onSubmit={handleSubmit}
        >
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleUserNameChange}
                  required
                />
              </div>
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  onChange={handleFirstNameChange}
                  required
                />
              </div>
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  onChange={handleLastNameChange}
                  required
                />
              </div>
              <div className="ui left icon input">
                <i className="mail icon"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  required
                />
              </div>
            </div>
            <input
              type="submit"
              value="Register"
              className="ui fluid large teal submit button"
            />
            <p style={{ marginTop: "40px" }}>
              if you already have an account you can{" "}
              <Link to="/login">Login here</Link>
            </p>
          </div>

          <div id="register-error-msg" className="ui error message">
            Sorry - please fill out all fields
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
