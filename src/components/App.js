import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import SearchResults from './SearchResults';

// Search
// Nav
// PhotoContainer
// Photo

class App extends Component {

  // state = {
  //   loading: true,
  //   cats: null,
  //   dogs: null,
  //   birds: null
  // }

  // componentDidMount() {
  //   Promise.all([ 
  //     getPhotos('cat'),
  //     getPhotos('dog'),
  //     getPhotos('bird')
  //   ])
  //   .then(([cats, dogs, birds]) => {
  //     this.setState({
  //       cats,
  //       dogs,
  //       birds,
  //       loading: false
  //     });
  //   });
  // }

  render() {
    return (
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
  }
}

export default App;
