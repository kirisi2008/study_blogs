import * as React from 'react';
import { Route, Switch } from 'react-router';
import { default as app } from 'app/containers/App/Main';
import { hot } from 'react-hot-loader';

export const App = () => (
  <Switch>
    <Route path="/" component={app} />
  </Switch>
);

export default hot(module)(App);
