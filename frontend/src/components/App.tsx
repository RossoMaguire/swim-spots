import React, { useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Feed from "./Feed/Feed";
import CreateSpot from "./CreateSpot/CreateSpot";
import history from "../history";

const App = (): React.ReactElement => {
  const [user, setUser] = useState(localStorage.getItem("loggedIn"));

  const handleLogin = (username: string): void => {
    localStorage.setItem("loggedIn", username);
    setUser(localStorage.getItem("loggedIn"));
    history.push("/feed");
  };

  const handleLogout = (): void => {
    setUser(null);
    history.push("/login");
    localStorage.removeItem("loggedIn");
  };

  return (
    <div className="main ui container">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/feed" /> : <Redirect to="/register" />}
          </Route>
          <ProtectedRoute
            exact
            path="/feed"
            user={user}
            component={() => <Feed user={user} handleLogout={handleLogout} />}
          />
          <Route
            exact
            path="/login"
            render={() => <Login handleLogin={handleLogin} />}
          />
          <Route exact path="/register" render={() => <Register />} />
          <Route
            exact
            path="/create"
            render={() => <CreateSpot user={user} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
