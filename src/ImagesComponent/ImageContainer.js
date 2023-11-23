import React from 'react';
import './image-container.css';

const ImageContainer = ({ imageUrl, altText }) => {
  return (
    <div className="image-container">
      <img className='images' src={(imageUrl)} alt={altText} />
    </div>
  );
};

export default ImageContainer;
