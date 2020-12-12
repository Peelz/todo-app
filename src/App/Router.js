import React, { useContext } from "react";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import Todo from "../containers/Todo";
import Login from "../containers/Login";
import AuthenContext from "../context/Authen";
import Home from "../containers/Home";
import routes from "../router";

const Routes = (props) => {
  const context = useContext(AuthenContext);
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        {routes.map((route) => (
          <Route {...route}></Route>
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
