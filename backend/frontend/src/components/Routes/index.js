import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";
import Navbar from "../Navbar";
import Acceuil from "../../pages/Acceuil";

const index = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Acceuil />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default index;
