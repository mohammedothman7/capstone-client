import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginFormContainer, RegisterFormContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/register" component={RegisterFormContainer} />
    </Switch>
  );
};

export default RoutesView;
