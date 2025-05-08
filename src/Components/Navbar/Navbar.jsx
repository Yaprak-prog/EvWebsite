import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">EV-olution</div>
      <div className="menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="menu-cont">Contact</li>
      </div>
    </div>
  );
}

export default Navbar;
