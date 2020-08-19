import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = (props) => (
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      <Photo />
    </ul>
  </div>
);

export default Gallery;