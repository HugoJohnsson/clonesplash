import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home.js';
import Search from './containers/Search.js';

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/search/:query" component={Search} />
  </Switch>
)

export default BaseRouter;
