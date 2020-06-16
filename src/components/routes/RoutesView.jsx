import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  NavBarContainer,
  LoginFormContainer,
  RegisterFormContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={NavBarContainer} />
      <Route exact path="/register" component={RegisterFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
    </Switch>
  );
};

export default RoutesView;
