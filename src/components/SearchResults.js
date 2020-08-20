import React, { Component } from 'react';
import Gallery from './Gallery';
import apiKey from '../config';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      photos: null
    }
  }

  componentDidMount() {
    this.getPhotos(this.props.searchterm);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchterm !== this.props.searchterm) {
      this.getPhotos(this.props.searchterm);
    }
  }

  getPhotos = (searchTerm) => {
    let fetchURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&sort=relevance&safe_search=1&content_type=1&media=photos&per_page=24&format=json&nojsoncallback=1`;
  
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => this.parsePhotoURLs(data))
      .then((photos) => {
        this.setState({
          photos,
          loading: false
        });
      })
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
        (this.state.loading)
        ? <p>Loading...</p>
        : <Gallery photos={this.state.photos} title={this.props.searchterm} />
      )
  }
}

export default SearchResults;