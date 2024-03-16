// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParentComponent from './ParentComponent';
import Dental from './nav/Dental';

const AppRoutes = ({ }) => {
  
  return (
    <Routes>
      <Route path="/" element={<ParentComponent />} />
      <Route path="/dental" element={<Dental />} />
    </Routes>
  );
};

export default AppRoutes;
