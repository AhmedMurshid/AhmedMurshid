import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AssignmentTracker.css';

const assignments = [
  { date: 'June 1, 2024', tasks: [] },
  {
    date: 'June 2, 2024',
    tasks: [
      { title: 'Unit 1 Assignment - Part One', due: '6/2/24, 11:59 PM', course: 'CJ-202-50-4245: CORRECTIONS IN THE U.S. - SB-Summer 2024', url: 'https://blackboard.louisville.edu/webapps/blackboard/content/listContent.jsp?course_id=_1749748_1&content_id=_27327098_1', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' },
      { title: 'Unit 1 Assignment - Part Two', due: '6/2/24, 11:59 PM', course: 'CJ-202-50-4245: CORRECTIONS IN THE U.S. - SB-Summer 2024', url: 'https://blackboard.louisville.edu/webapps/blackboard/content/listContent.jsp?course_id=_1749748_1&content_id=_27327098_1', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' },
      { title: 'Unit 2 Assignment - Part One', due: '6/2/24, 11:59 PM', course: 'CJ-202-50-4245: CORRECTIONS IN THE U.S. - SB-Summer 2024', url: 'https://blackboard.louisville.edu/webapps/blackboard/content/listContent.jsp?course_id=_1749748_1&content_id=_27327098_1', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' },
      { title: 'Unit 2 Assignment - Part Two', due: '6/2/24, 11:59 PM', course: 'CJ-202-50-4245: CORRECTIONS IN THE U.S. - SB-Summer 2024', url: 'https://blackboard.louisville.edu/webapps/blackboard/content/listContent.jsp?course_id=_1749748_1&content_id=_27327098_1', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' }
    ]
  },
  {
    date: 'June 3, 2024',
    tasks: [
      { title: 'Research Project - Submission Deadline for the Proposal', due: '6/3/24, 11:59 AM', course: 'CJ-306-50-4245: CRIMINAL PROCEDURE - SB-Summer 2024', url: 'https://blackboard.louisville.edu/ultra/courses/_1749750_1/outline/edit/document/_29608970_1?courseId=_1749750_1&view=content', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' },
     ]
  },
  {
    date: 'June 8, 2024',
    tasks: [
      { title: 'Unit 1 Study Guide', due: '6/8/24, 11:59 PM', course: 'CJ-202-50-4245: CORRECTIONS IN THE U.S. - SB-Summer 2024', url: 'https://blackboard.louisville.edu/webapps/blackboard/content/listContent.jsp?course_id=_1749748_1&content_id=_27327098_1', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' }
    ]
  },
  {
    date: 'June 9, 2024',
    tasks: [
      { title: 'Unit 2 Study Guide', due: '6/9/24, 11:59 PM', course: 'CJ-202-50-4245: CORRECTIONS IN THE U.S. - SB-Summer 2024', url: 'https://blackboard.louisville.edu/webapps/blackboard/content/listContent.jsp?course_id=_1749748_1&content_id=_27327098_1', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' }
    ]
  },
  {
    date: 'June 14, 2024',
    tasks: [
      { title: 'Discussion Group #1 (6/3-6/14)', due: '6/14/24, 3:01 PM', course: 'CJ-306-50-4245: CRIMINAL PROCEDURE-Summer 2024', url: '', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' }
    ]
  },
  {
    date: 'June 24, 2024',
    tasks: [
      { title: 'Research Project', due: '6/24/24, 3:01 PM', course: 'CJ-306-50-4245: CRIMINAL PROCEDURE-Summer 2024', url: '', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' }
    ]
  },
  {
    date: 'June 28, 2024',
    tasks: [
      { title: 'Test', due: '6/28/24, 3:01 PM', course: 'CJ-306-50-4245: CRIMINAL PROCEDURE-Summer 2024', url: '', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' },
      { title: 'Discussion Group #2 (6/17-6/28)', due: '6/28/24, 3:01 PM', course: 'CJ-306-50-4245: CRIMINAL PROCEDURE-Summer 2024', url: '', googleDocUrl: 'https://docs.google.com/document/d/1MmTdaDpbpC6kcSKAUkAEg2kDqW5mNccgAr4O6e_J3Mg/edit' }
    ]
  }
];
const getColor = (course) => {
  const colors = {
    'CJ-202-50-4245': '#FFD700', // Gold
    'CJ-306-50-4245': '#FF69B4' // HotPink
    // Add more course codes and colors as needed
  };
  return colors[course.split(':')[0]] || '#FFFFFF'; // Default color if course not found
};

const AssignmentTracker = () => {
  const [value, onChange] = useState(new Date());

  const markedDates = assignments.flatMap((assignment) => {
    if (assignment.tasks.length > 0) {
      return [{ date: new Date(assignment.date), tasks: assignment.tasks }];
    }
    return [];
  });

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const marked = markedDates.find((markedDate) => markedDate.date.toDateString() === date.toDateString());
      if (marked) {
        return <div className="highlight"></div>;
      }
    }
  };

  const taskDetails = markedDates.find((markedDate) => markedDate.date.toDateString() === value.toDateString());

  return (
    <div className="assignment-tracker">
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={tileContent}
      />
      <div className="assignment-details">
        {taskDetails ? (
          <>
            <h2>Assignments for {value.toDateString()}</h2>
            <ul>
              {taskDetails.tasks.map((task, idx) => (
                <li key={idx} style={{ backgroundColor: getColor(task.course) }}>
                  <strong>{task.title}</strong><br />
                  Due date: {task.due} ∙ {task.course}<br />
                  <a href={task.url} target="_blank" rel="noopener noreferrer">View Assignment</a><br />
                  {task.googleDocUrl && (
                    <a href={task.googleDocUrl} target="_blank" rel="noopener noreferrer">Google Doc</a>
                  )}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>No assignments for this day.</p>
        )}
      </div>
    </div>
  );
};

export default AssignmentTracker;
