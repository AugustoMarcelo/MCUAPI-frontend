import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Movies from '~/pages/Movies';
import TVShows from '~/pages/TVShows';
import Characters from '~/pages/Characters';
import ManageCharacter from '~/pages/ManageCharacter';
import ManageMovie from '~/pages/ManageMovie';
import ManageTvshow from '~/pages/ManageTvshow';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/movies/create" exact component={ManageMovie} isPrivate />
      <Route path="/movies/edit/:id" exact component={ManageMovie} isPrivate />
      <Route path="/movies" component={Movies} isPrivate />
      <Route path="/tvshows/create" exact component={ManageTvshow} isPrivate />
      <Route
        path="/tvshows/edit/:id"
        exact
        component={ManageTvshow}
        isPrivate
      />
      <Route path="/tvshows" component={TVShows} isPrivate />
      <Route
        path="/characters/create"
        exact
        component={ManageCharacter}
        isPrivate
      />
      <Route
        path="/characters/edit/:id"
        exact
        component={ManageCharacter}
        isPrivate
      />
      <Route path="/characters" component={Characters} isPrivate />
    </Switch>
  );
}
