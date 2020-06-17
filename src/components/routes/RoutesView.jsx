import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  LoginFormContainer,
  RegisterFormContainer,
  AboutContainer,
  AllGamesContainer,
} from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path='/' component={AllGamesContainer}></Route>
      <Route exact path='/register' component={RegisterFormContainer} />
      <Route exact path='/login' component={LoginFormContainer} />
      <Route exact path='/about' component={AboutContainer} />
    </Switch>
  );
};

export default RoutesView;
