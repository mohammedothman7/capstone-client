import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  LoginFormContainer,
  RegisterFormContainer,
  AllGamesContainer,
  NavBarContainer,
  AboutContainer,
  LoggedInNavBarContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={NavBarContainer} />
      <Route exact path="/register" component={RegisterFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/about" component={AboutContainer} />
      <Route exact path="/loginNav" component={LoggedInNavBarContainer} />
    </Switch>
  );
};

export default RoutesView;
