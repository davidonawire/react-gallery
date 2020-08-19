import React, { Component } from 'react';
import Nav from './Nav';
import Gallery from './Gallery';
import Search from './Search';

// Search
// Nav
// PhotoContainer
// Photo

class App extends Component {

  

  render() {
    return (
      <div className="container">
        <Search />
        <Nav />
        <Gallery />
      </div>
    );
  }
}

export default App;
