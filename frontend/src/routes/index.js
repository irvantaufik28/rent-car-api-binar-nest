import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarTop from "../components/layouts/Navbar";
import FooterCoy from "../components/layouts/Footer";
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
