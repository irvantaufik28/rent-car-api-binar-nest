import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

import NavbarTop from "../components/Navbar";
function RoutesIndex() {
  return (
    <Router>
      <div>
        <NavbarTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RoutesIndex;
