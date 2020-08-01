import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  LoginFormContainer,
  RegisterFormContainer,
  AboutContainer,
  GamePageContainer,
  SearchGamesContainer,
  LoggedInNavBarContainer,
  NavBarContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={NavBarContainer} />
      <Route exact path="/register" component={RegisterFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/about" component={AboutContainer} />
      <Route exact path="/gamePage/:id" component={GamePageContainer} />
      <Route exact path="/loginNav" component={LoggedInNavBarContainer} />
      <Route exact path="/search" component={SearchGamesContainer} />
      <Route path="*" component={NavBarContainer} />
    </Switch>
  );
};

export default RoutesView;
