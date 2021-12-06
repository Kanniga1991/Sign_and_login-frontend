import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Forgot from "./Forgot";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Menu} />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/signup" exact={true} component={Signup} />
          <Route path="/signin" exact={true} component={Signin} />
          <Route path="/forgot" exact={true} component={Forgot} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
