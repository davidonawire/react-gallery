import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Nav from './Nav';
import Gallery from './Gallery';
import Search from './Search';

// Search
// Nav
// PhotoContainer
// Photo

class App extends Component {

  state = {
    loading: true,
    cats: null,
    dogs: null,
    computers: null
  }

  componentDidMount() {
    Promise.all([ 
      this.getPhotos('cat'),
      this.getPhotos('dog'),
      this.getPhotos('computer')
    ])
    .then(([cats, dogs, computers]) => {
      this.setState({
        cats,
        dogs,
        computers,
        loading: false
      });
    });
  }

  getPhotos = (searchTerm) => {
    let apiKey = this.props.api;
    let fetchURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&safe_search=1&content_type=1&media=photos&per_page=24&format=json&nojsoncallback=1`;

    return fetch(fetchURL)
      .then(response => response.json())
      .then(data =>  this.parsePhotoURLs(data))
      .catch(error => {
        console.error('There was an error when fetching photos: ', error);
      })
  }

  parsePhotoURLs = (data) => {
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    return data.photos.photo.map(photo => {
      let farm_id = photo.farm;
      let server_id = photo.server;
      let photo_id = photo.id;
      let secret = photo.secret;

      let photoURL = `https://farm${farm_id}.staticflickr.com/${server_id}/${photo_id}_${secret}_m.jpg`;

      return { url: photoURL,
               id: photo_id
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search />
          <Nav />
          <Switch>
            <Route path="/cats" render={() => <Gallery photos={this.state.cats} />} />
            <Route path="/dogs" render={() => <Gallery photos={this.state.dogs} />} />
            <Route path="/computers" render={() => <Gallery photos={this.state.computers} />} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
