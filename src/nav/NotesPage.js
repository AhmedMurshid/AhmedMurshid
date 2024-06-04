// NotesPage.js
import React from 'react';
import './NotesPage.css';

const NotesPage = () => {
  const notes = [
    { date: 'June 1, 2024', note: 'Start preparing for Unit 1 assignments.' },
    { date: 'June 2, 2024', note: 'Complete Unit 1 and Unit 2 assignments.' },
    { date: 'June 3, 2024', note: 'Submit Research Project Proposal.' },
  ];

  const links = [
    { label: 'Server build', url: 'https://docs.google.com/document/d/1PJ0lZnccrR_loUmOfncP_Mq0Rd3z-nVfmY9ZtO8NemU/edit' }
  ];

  return (
    <div className="notes-page">
      <h2>Quick Notes</h2>
      <ul>
        {notes.map((note, idx) => (
          <li key={idx}>
            <strong>{note.date}:</strong> {note.note}
          </li>
        ))}
      </ul>
      <h2>Useful Links</h2>
      <ul>
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPage;
