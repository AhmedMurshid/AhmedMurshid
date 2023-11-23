import React from 'react';

const ImageContainer = ({ imageUrl, altText }) => {
  return (
    <div className="image-container">
      <img src={(imageUrl)} alt={altText} />
    </div>
  );
};

export default ImageContainer;
