import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import SearchResults from './SearchResults';
import NotFound404 from './NotFound404';

const App = () => (
      <BrowserRouter>
        <div className="container">
          <Search />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/cats" />)} />
            <Route path="/cats" render={() => (<SearchResults searchterm="cats" />)} />
            <Route path="/dogs" render={() => (<SearchResults searchterm="dogs" />)} />
            <Route path="/birds" render={() => (<SearchResults searchterm="birds" />)} />
            <Route path="/search/:searchterm" render={(props) => (<SearchResults searchterm={props.match.params.searchterm} />)} />
            <Route component={NotFound404} />
          </Switch>
        </div>
      </BrowserRouter>
);

export default App;
