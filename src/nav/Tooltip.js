import React from 'react';
import './tooltip.css';  // Make sure to create appropriate CSS for your tooltips

const Tooltip = ({ children, content }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-content">{content}</span>
    </div>
  );
};

export default Tooltip;
