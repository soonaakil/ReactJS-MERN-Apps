import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <h1>
            <Link to={'/'}>Soonchef</Link>
          </h1>
        </div>
        <div className="nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/clock"}>Digital Clock</Link>
          <Link to={"/todo-app"}>Todo App</Link>
          <Link to={"/calculator"}>Calculator</Link>
          <Link to={"/signup"}>SignUp</Link>
          <Link to={"/axios"}>Axios</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
