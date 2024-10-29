import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import DisasterData from './components/DisasterData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/disaster-data" element={<DisasterData />} />
        <Route path="/" element={<Login />} /> {/* Redirect to login by default */}
      </Routes>
    </Router>
  );
};

export default App;
