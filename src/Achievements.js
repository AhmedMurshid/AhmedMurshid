import React, { useState, useEffect } from 'react';
import styles from './Achievements.css';

const Achievements = ({ achievementsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === achievementsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change achievement every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [achievementsData]);

  return (
    <div className={styles.slideShow}>
      {achievementsData.length > 0 && (
        <div className={styles.slide}>
          <div className={styles.achievementContent}>
            <h2>{achievementsData[currentIndex]}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
