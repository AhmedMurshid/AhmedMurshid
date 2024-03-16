import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParentComponent from './ParentComponent';
import Dental from './nav/Dental';

const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/my-site" element={<ParentComponent />} />
    <Route path="/my-site/dental" element={<Dental />} />
  </Routes>
  
  );
};

export default AppRoutes;

