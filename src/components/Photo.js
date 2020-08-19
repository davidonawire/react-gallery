import React from 'react';

const Photo = ({ photoURL }) => {
  return(
    <li>
      <img src={photoURL} alt="" />
    </li>
  );
}

export default Photo;