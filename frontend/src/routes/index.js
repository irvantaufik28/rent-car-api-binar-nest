import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarTop from "../components/Navbar";
import FooterCoy from "../components/Footer";
import HomePage from "../pages/HomePage";

function RoutesIndex() {
  return (
    <Router>

      <NavbarTop />

      <HomePage />
      <FooterCoy />

    </Router>
  );
}

export default RoutesIndex;
