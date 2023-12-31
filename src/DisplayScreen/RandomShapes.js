import React from 'react';
import './Randomshapes.css'; // Import your CSS file here

function RandomShapes() {
  // Function to generate a random color
  const randomColor = () => {
    return `rgb(0, 0, ${Math.floor(Math.random() * 255)})`;
  };
  
  // Function to create an array of shapes with random properties
  const generateShapes = (numberOfShapes) => {
    return Array.from({ length: numberOfShapes }, () => ({
      size: Math.random() * 100,
      color: randomColor(),
      borderRadius: Math.random() > 0.5 ? '50%' : '0',
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }));
  };

  // Generate 50 shapes
  const shapes = generateShapes(50);

  return (
    <div className="shapeContainer">
      {shapes.map((shape, index) => (
        <div
          key={index}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: shape.color,
            borderRadius: shape.borderRadius,
            position: 'absolute',
            left: shape.left,
            top: shape.top
          }}
        />
      ))}
    </div>
  );
}

export default RandomShapes;
