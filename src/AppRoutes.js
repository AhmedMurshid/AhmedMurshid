import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import ParentComponent from './ParentComponent';
import Dental from './nav/Dental';
import AssignmentTracker from './nav/AssignmentTracker';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentComponent />} />
        <Route path="/dental" element={<Dental />} />
        <Route path="/a1" element={<AssignmentTracker />} />
        {/* Your other routes */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
