import React from 'react';
import Photo from './Photo';

const Gallery = ({ photos, title }) => {
  document.title = title + '- Flickr Search'

  return (
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      { photos.map(photo => (
        <Photo photoURL={photo.url} key={photo.id} />
      )) }
    </ul>
  </div>
  );
};

export default Gallery;