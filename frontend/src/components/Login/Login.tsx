import axios from "axios";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

interface ILogin {
  handleLogin: Function;
}

const useStyles = makeStyles({
  centeredForm: {
    margin: "0 auto",
    width: "70%",
  },
});

const Login = (props: ILogin): React.ReactElement => {
  const classes = useStyles();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios
      .post("http://localhost:8090/api/users/login", {
        user_name: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        props.handleLogin(res.data.user_name);
      })
      .catch((err) => {
        console.log(err);
        const msg = document.getElementById("login-error-msg");
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
          <div className="content">Login to Swim Spots</div>
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
                />
              </div>
            </div>
            <input
              type="submit"
              value="Login"
              className="ui fluid large teal submit button"
            />
          </div>

          <div id="login-error-msg" className="ui error message">
            Sorry - that user doesn't exist
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
