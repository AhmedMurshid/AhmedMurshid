import React, { useState } from 'react';

const ContentSections = () => {
  const [teethType, setTeethType] = useState('deciduous');

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>Learn About Teeth: Deciduous vs. Permanent</h2>
      <button onClick={() => setTeethType('deciduous')} style={{ marginRight: '10px', padding: '10px', cursor: 'pointer', backgroundColor: teethType === 'deciduous' ? '#4CAF50' : '#e7e7e7', color: teethType === 'deciduous' ? 'white' : 'black' }}>
        Deciduous Teeth
      </button>
      <button onClick={() => setTeethType('permanent')} style={{ padding: '10px', cursor: 'pointer', backgroundColor: teethType === 'permanent' ? '#008CBA' : '#e7e7e7', color: teethType === 'permanent' ? 'white' : 'black' }}>
        Permanent Teeth
      </button>

      {teethType === 'deciduous' ? (
        <div style={{ marginTop: '20px' }}>
          <h3>Deciduous Teeth (Baby Teeth)</h3>
          <p>
            Deciduous teeth, also known as milk teeth or baby teeth, start to appear when a child is about six months old. By the age of three, most children have a full set of 20 deciduous teeth. These teeth are essential for chewing, speaking, and holding space in the jaws for permanent teeth that are growing under the gums.
          </p>
        </div>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h3>Permanent Teeth</h3>
          <p>
            Permanent teeth replace deciduous teeth and are meant to last a lifetime. There are 32 permanent teeth, and they usually start to emerge around the age of six. Permanent teeth are stronger and more durable than deciduous teeth, capable of withstanding the wear and tear of daily use.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentSections;
