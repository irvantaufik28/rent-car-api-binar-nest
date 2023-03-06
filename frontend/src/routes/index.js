import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarTop from "../components/Navbar";
import FooterCoy from "../components/Footer";

function RoutesIndex() {
  return (
    <Router>
      
        <NavbarTop />

  
      <FooterCoy />
      
    </Router>
  );
}

export default RoutesIndex;
