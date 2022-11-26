import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from './pages/all/home/home';
import Dashboard from './pages/admins/Dashboard.jsx';
import Login from './pages/all/auth/Login';
import Register from './pages/all/auth/Register';
import Auth from './pages/all/auth/Login';
import Event from './pages/admins/events/events_table';

function App() {
  return (
   <>
   <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes>
      </div>
   </Router>
   </>
  );
}

export default App;
