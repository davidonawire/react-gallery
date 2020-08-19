import React, { Component } from 'react';
import Nav from './Nav';
import Gallery from './Gallery';
import Search from './Search';

// Search
// Nav
// PhotoContainer
// Photo

class App extends Component {

  state = {
    photos: [
      { 
        url: 'https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg',
        id: 1
      },
      {
        url: 'https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg',
        id: 2
      },
      {
        url: 'https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg',
        id: 3
      },
      {
        url: 'https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg',
        id: 4
      }
    ]
  }

  render() {
    return (
      <div className="container">
        <Search />
        <Nav />
        <Gallery photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
