import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import MarvelApp from './components/MarvelApp';
import CharactersList from './components/CharactersList';
import CharacterSheet from './components/CharacterSheet';

import "./css/site.scss";

ReactDOM.render (
  <Router history={browserHistory}>
    <Route path="/" component={MarvelApp}>
      <IndexRoute component={CharactersList} />
      <Route path="/hero/:characterId" component={CharacterSheet} />
      <Route path="*" component={CharactersList} />
    </Route>
  </Router>,
  document.getElementById('content')
);
