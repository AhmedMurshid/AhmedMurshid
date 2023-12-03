import React from 'react';
import './common-container.css';

const LinksContainer = ({ links }) => {
  return (
    <div className="links-container common-container">
      <h2>My Links</h2>
      <ul className='link-ul-container'>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksContainer;
