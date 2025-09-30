import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo">
            <h2>Soonchef</h2>
        </div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
