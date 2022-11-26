import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './pages/all/home/home';
import Dashboard from './pages/admins/Dashboard.jsx';
import Login from './pages/all/auth/Login';
import Register from './pages/all/auth/Register';
import Event from './pages/admins/events/events_table';
import Complaint from './pages/admins/plaintes/plainte_table';

function App() {
  return (
   <>
   <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/events" element={<Event/>}/>
        <Route path="/complaints" element={<Complaint/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </div>
   </Router>
   </>
  );
}

export default App;
