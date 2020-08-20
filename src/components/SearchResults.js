import React, { Component } from 'react';
import getPhotos from '../getPhotos';
import Gallery from './Gallery';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      photos: null
    }
  }

  componentDidMount() {
    this.fetchData(this.props.searchterm);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchterm !== this.props.searchterm) {
      this.fetchData(this.props.searchterm);
    }
  }

  fetchData(searchTerm) {
    getPhotos(searchTerm)
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
        : <Gallery photos={this.state.photos} title={this.props.searchterm} />
      )
  }
}

export default SearchResults;