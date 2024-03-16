import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import ParentComponent from './ParentComponent';
import Dental from './nav/Dental';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentComponent />} />
        <Route path="/dental" element={<Dental />} />
        {/* Your other routes */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
