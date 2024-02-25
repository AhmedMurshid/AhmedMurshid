import React from 'react';
import clubsData from '../files/Clubs.json';
import ssa from '../images/ssa.jpeg';

const backgroundColor1 = '#defe';

function Clubs() {
  const clubs = clubsData.Clubs || [];

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <h2>Club Activities</h2>
        {clubs.map((club, index) => (
          <div key={index} id={`club-${index}`} style={{ backgroundColor: backgroundColor1, padding: '10px', marginBottom: '10px' }}>
            
            <h3 style={{ backgroundColor: '#f0f0f0', padding: '5px', borderRadius: '5px' }}>{club.name}</h3>
            {/* {club.imageUrl && (
              <img src={club.imageUrl} alt={club.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
            )} */}
            {club.imageUrl && (
              <img src={ssa} alt={club.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
            )}

            <p>Category: {club.category}</p>
            <p><strong style={{ backgroundColor: '#f0f0f0', padding: '1px', borderRadius: '5px' }}>Description:</strong> <br/>{club.description}</p>
            
            {club.events && club.events.length > 0 && (
              <div>
                <h4>Events:</h4>
                <ul>
                  {club.events.map((event, eventIndex) => (
                    <li key={eventIndex}>
                      {event.name} - <em>{event.date}</em>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {club.contact && (
              <p>
                Contact: <a href={`mailto:${club.contact.email}`} target="_blank" rel="noopener noreferrer">{club.contact.name}</a>
              </p>
            )}

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;
