import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from './pages/all/home/home';

function App() {
  return (
   <>
   <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </div>
   </Router>
   </>
  );
}

export default App;
