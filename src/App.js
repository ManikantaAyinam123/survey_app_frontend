import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import VolunteerPage from './pages/VolunteerPage';
import LeadPage from './pages/LeadPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/VolunteerData" element={<VolunteerPage/>}/>
        <Route path="/LeadData" element={<LeadPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

