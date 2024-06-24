import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import ParentComponent from './ParentComponent';
import Dental from './nav/Dental';
import AssignmentTracker from './nav/AssignmentTracker';
import NotesPage from './nav/NotesPage'; 
import SearchPaper from './nav/SearchPaper'; // Import the SearchPaper component

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentComponent />} />
        <Route path="/dental" element={<Dental />} />
        <Route path="/a1" element={<AssignmentTracker />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/search-paper" element={<SearchPaper />} /> {/* Add the route for the search paper */}
        {/* Your other routes */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
