import React, { useState } from 'react';
import Home from './pages/all/home/home';
import Dashboard from './pages/admins/Dashboard.jsx';
import Login from './pages/all/auth/Login';
import Register from './pages/all/auth/Register';
import Event from './pages/admins/events/events_table';
import Complaint from './pages/admins/plaintes/plainte_table';
import AddComplaint from './pages/clients/complaints/complaint';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/events" element={<Event/>}/>
        <Route path="/complaints" element={<Complaint/>}/>
        <Route path="/complaints/add" element={<AddComplaint/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </div>
   </BrowserRouter>
   </>
  );
}

export default App;
