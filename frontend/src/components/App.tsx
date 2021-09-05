import React, { useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./Login/Login";
import Feed from "./Feed/Feed";
import history from "../history";

const App = (): React.ReactElement => {
  const [user, setUser] = useState(false);

  const handleLogin = (): void => {
    setUser(true);
    history.push("/feed");
  };

  const handleLogout = (): void => {
    setUser(false);
    history.push("/login");
  };

  return (
    <div className="ui container">
      <h1>Welcome to Swim Spots!</h1>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/feed" /> : <Redirect to="/login" />}
          </Route>
          <ProtectedRoute
            exact
            path="/feed"
            handleLogout={handleLogout}
            user={user}
            component={Feed}
          />
          <Route
            exact
            path="/login"
            render={() => <Login handleLogin={handleLogin} status={user} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
