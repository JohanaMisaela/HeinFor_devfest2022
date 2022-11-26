import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from './pages/all/home/home';
import Dashboard from './pages/admins/Dashboard';

function App() {
  return (
   <>
   <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </div>
   </Router>
   </>
  );
}

export default App;
