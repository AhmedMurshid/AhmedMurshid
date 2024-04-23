import React from 'react';

const ToothPolygon = ({ points, label, onClick }) => {
  return (
    <g onClick={onClick}>
      <polygon points={points} fill="white" stroke="black" strokeWidth="1" />
      <text
        x={getLabelPosition(points).x}
        y={getLabelPosition(points).y}
        fontSize="3"
        fill="black"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
};

const getLabelPosition = (points) => {
  // This function calculates where to place the label
  let x = 0, y = 0;
  let coords = points.match(/(\d+)% (\d+)%/g).map(coord => {
    return coord.split('% ').map(Number);
  });

  coords.forEach(coord => {
    x += coord[0];
    y += coord[1];
  });

  x = (x / coords.length).toFixed(2) + '%';
  y = (y / coords.length).toFixed(2) + '%';
  return { x, y };
};

const TeethDiagram = ({ onSelectTooth }) => {
  const teeth = [
    { id: 'centralIncisor', label: 'Central Incisor', points: '24% 75%, 41% 89%, 53% 73%, 61% 24%, 34% 15%, 7% 31%' },
    { id: 'lateralIncisor', label: 'Lateral Incisor', points: '24% 78%, 39% 87%, 49% 75%, 57% 30%, 34% 22%, 7% 34%' },
    { id: 'canine', label: 'Canine', points: '24% 78%, 41% 85%, 45% 75%, 53% 28%, 34% 20%, 7% 30%' },
    // Add more teeth with adjusted points
  ];

  return (
    <svg viewBox="0 0 100 100" height="200px" width="200px">
      {teeth.map(tooth => (
        <ToothPolygon
          key={tooth.id}
          points={tooth.points}
          label={tooth.label}
          onClick={() => onSelectTooth(tooth.id)}
        />
      ))}
    </svg>
  );
};

const InteractiveTeethDiagram = () => {
  const handleToothClick = (toothId) => {
    console.log(`Tooth ${toothId} clicked`);
    // Logic to handle the click event, like displaying additional info
  };

  return (
    <div>
      <TeethDiagram onSelectTooth={handleToothClick} />
      {/* Information display component goes here */}
    </div>
  );
};

export default InteractiveTeethDiagram;




