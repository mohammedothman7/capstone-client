import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllGamesContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path='/' component={AllGamesContainer}></Route>
    </Switch>
  );
};

export default RoutesView;
