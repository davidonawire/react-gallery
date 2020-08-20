import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import SearchResults from './SearchResults';

const App = () => (
      <BrowserRouter>
        <div className="container">
          <Search />
          <Nav />
          <Switch>
            <Route path="/cats" render={() => (<SearchResults searchterm="cats" />)} />
            <Route path="/dogs" render={() => (<SearchResults searchterm="dogs" />)} />
            <Route path="/birds" render={() => (<SearchResults searchterm="birds" />)} />
            <Route path="/search/:searchterm" render={(props) => (<SearchResults searchterm={props.match.params.searchterm} />)} />
          </Switch>
        </div>
      </BrowserRouter>
);

export default App;
