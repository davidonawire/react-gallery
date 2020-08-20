import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import getPhotos from '../getPhotos';
import Nav from './Nav';
import Gallery from './Gallery';
import Search from './Search';
import SearchResults from './SearchResults';

// Search
// Nav
// PhotoContainer
// Photo

class App extends Component {

  state = {
    loading: true,
    cats: null,
    dogs: null,
    birds: null
  }

  componentDidMount() {
    Promise.all([ 
      getPhotos('dog'),
      getPhotos('cat'),
      getPhotos('bird')
    ])
    .then(([cats, dogs, birds]) => {
      this.setState({
        cats,
        dogs,
        birds,
        loading: false
      });
    });
  }

  render() {
    const mainContent = () => (
        <>
          <Nav />
          <Switch>
            <Route path="/cats" render={(props) => (<Gallery {...props} photos={this.state.cats} title="Cats" />)} />
            <Route path="/dogs" render={(props) => (<Gallery {...props} photos={this.state.dogs} title="Dogs" />)} />
            <Route path="/birds" render={(props) => (<Gallery {...props} photos={this.state.birds} title="Birds" />)} />
            <Route path="/search/:searchterm" render={(props) => (<SearchResults {...props} />)} />
          </Switch>
        </>
    );


    return (
      <BrowserRouter>
        <div className="container">
          <Search />
          {
            (this.state.loading)
              ? <p>Loading...</p>
              : mainContent()
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
