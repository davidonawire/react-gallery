import React, { Component } from 'react';
import getPhotos from '../getPhotos';
import Gallery from './Gallery';

class SearchResults extends Component {

  state = {
    loading: true,
    photos: null
  }

  searchTerm = this.props.match.params.searchterm;

  componentDidMount() {
    getPhotos(this.searchTerm)
    .then((photos) => {
      this.setState({
        photos,
        loading: false
      });
    });
  }

  render() {
      return (
        (this.state.loading)
        ? <p>Loading...</p>
        : <Gallery photos={this.state.photos} title={this.searchTerm} />
      )
  }
}

export default SearchResults;