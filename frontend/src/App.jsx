import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from './pages/all/home/home';
import Auth from './pages/all/auth/Login';

function App() {
  return (
   <>
   <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
      </div>
   </Router>
   </>
  );
}

export default App;
