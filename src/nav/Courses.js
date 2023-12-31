import React from 'react';
import coursesData from '../files/Resume.json';

function Courses() {
  const { courses } = coursesData;

  // Filter courses with non-null professors
  const filteredCourses = courses.filter(course => course.Professor !== null);

  return (
    <div>
      <h2>Courses</h2>
      <div>
        {filteredCourses.map((course, index) => (
          <div key={index}>
            <h3>{course.Class}: {course.Description}</h3>
            <p>Term: {course.Term}</p>
            <p>Professor: {course.Professor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
