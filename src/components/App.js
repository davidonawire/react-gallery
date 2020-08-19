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

  getPhotos = (searchTerm) => {
    let fetchURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&safe_search=1&content_type=1&media=photos&per_page=&format=json&nojsoncallback=1`;
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => this.parsePhotoURLs(data))
      .catch(error => {
        console.error('There was an error when fetching photos: ', error);
      })
  }

  parsePhotoURLs(data) {
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    return data.photos.photo.map(photo => {
      let farm_id = photo.farm;
      let server_id = photo.server;
      let photo_id = photo.id;
      let secret = photo.secret;

      let photoURL = `https://farm${farm_id}.staticflickr.com/${server_id}/${photo_id}_${secret}.jpg`;

      return { url: photoURL,
               id: photo_id
      }
    });
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
