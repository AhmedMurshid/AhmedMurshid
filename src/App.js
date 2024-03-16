import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import NavigationButtons from './NavSwitch';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;
