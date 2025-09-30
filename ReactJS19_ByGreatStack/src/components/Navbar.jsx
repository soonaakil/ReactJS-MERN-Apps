import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="top-nav">
        <div className="nav-brand">
            My App
        </div>
        <ul className="nav-links">
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/products'}><li>Products</li></Link>
          <Link to={'/about'}><li>About</li></Link>
          <Link to={'/contact'}><li>Contact</li></Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
