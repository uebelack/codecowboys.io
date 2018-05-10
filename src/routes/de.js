import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

const Routes = () => (
  <Switch>
    <Route path="/de" component={Home}/>
  </Switch>
);

export default Routes;