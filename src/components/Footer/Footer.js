import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/deliver">Deliver</NavLink></li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} Phone Accessories</p>
    </footer>
  );
}

export default Footer;
