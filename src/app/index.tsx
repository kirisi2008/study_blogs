import * as React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoList } from 'app/containers/App';
import { hot } from 'react-hot-loader';

export const App = () => (
  <Switch>
    <Route path="/" component={TodoList} />
  </Switch>
);

export default hot(module)(App);
