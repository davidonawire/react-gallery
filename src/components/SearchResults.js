import React, { Component } from 'react';
import Gallery from './Gallery';
import NotFound from './NotFound';
import apiKey from '../config';

/**
 *  SearchResults acts as a container for a Gallery of images.
 *  The component handles the fetching and parsing of image data
 *  based on a provided search term, whether from a nav link
 *  or from the Search form.
 */
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

  // Ensure we load a new set of photos when we send the component a new search term
  componentDidUpdate(prevProps) {
    if (prevProps.searchterm !== this.props.searchterm) {
      this.getPhotos(this.props.searchterm);
    }
  }

  getPhotos = (searchTerm) => {
    let fetchURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&sort=relevance&safe_search=1&content_type=1&media=photos&per_page=24&format=json&nojsoncallback=1`;
  
    this.setState({ loading: true });

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

  // Parse the Flickr JSON into image URLs and return an array of { url, id } objects
  parsePhotoURLs = (data) => {
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
      if (this.state.loading) {
        return <p>Loading...</p>
      } else if (this.state.photos.length === 0) {
        return <NotFound />
      } else {
        return <Gallery photos={this.state.photos} title={this.props.searchterm} />
      }
  }
}

export default SearchResults;