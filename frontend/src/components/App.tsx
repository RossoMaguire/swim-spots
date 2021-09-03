import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import LoginRegister from "./LoginRegister/LoginRegister";
import history from "../history";

const App = (): React.ReactElement => {
  return (
    <div className="ui container">
      <h1>Welcome to Swim Spots!</h1>
      <Router history={history}>
        <Switch>
          <Route path="/login" exact component={LoginRegister} />
          <Route
            path="/register"
            exact
            component={() => <LoginRegister isRegister />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
