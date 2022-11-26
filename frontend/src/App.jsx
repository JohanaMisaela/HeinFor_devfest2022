import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/all/home/home';
import Dashboard from './pages/admins/Dashboard.jsx';
import Login from './pages/all/auth/Login';
import Register from './pages/all/auth/Register';
import Event from './pages/admins/events/events_table';
import User from './pages/admins/users/users_table';
import Complaint from './pages/admins/plaintes/plainte_table';
import AddComplaint from './pages/clients/complaints/complaint';
import AddEvent from './components/admins/addEvent';
import AddBadge from './pages/admins/badge/addBadge';
import AttribBadge from './pages/admins/badge/attribBadge';

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
        <Route path="/users" element={<User/>}/>
        <Route path="/complaints/add" element={<AddComplaint/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/attribBadge/:id" element={<AttribBadge/>}/>
        <Route path="/addBadge/:id" element={<AddBadge/>}/>
        <Route path="/addEvent" element={<AddEvent/>}/>
      </Routes>
      </div>
   </BrowserRouter>
   </>
  );
}

export default App;
