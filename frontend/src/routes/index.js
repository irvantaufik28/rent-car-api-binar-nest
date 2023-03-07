import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import HomePage from "../pages/HomePage";
import FindCar from "../pages/FindCar";

function RoutesIndex() {
  return (
    <Router>
      <div>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find" element={<FindCar />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default RoutesIndex;