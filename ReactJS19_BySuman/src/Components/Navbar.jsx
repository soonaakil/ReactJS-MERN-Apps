import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <h1>Hlo Chef</h1>
        </div>
        <div className="links">
          {isLoggedIn && (
            <>
              <NavLink
                to={"/users"}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "aliceblue" : "",
                  color: isActive ? "#333" : "",
                })}
              >
                Users
              </NavLink>
              <button onClick={handleLogout}>
                <NavLink
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "aliceblue" : "",
                    color: isActive ? "#333" : "",
                  })}
                >
                  LogOut
                </NavLink>
              </button>
            </>
          )}

          {!isLoggedIn && (
            <>
              <NavLink
                to={"/"}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "aliceblue" : "",
                  color: isActive ? "#333" : "",
                })}
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "aliceblue" : "",
                  color: isActive ? "#333" : "",
                })}
              >
                About Us
              </NavLink>
              <NavLink
                to={"/contact"}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "aliceblue" : "",
                  color: isActive ? "#333" : "",
                })}
              >
                Contact Us
              </NavLink>
              <button onClick={handleLogin}>
                <NavLink
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "aliceblue" : "",
                    color: isActive ? "#fff" : "",
                  })}
                >
                  LogIn
                </NavLink>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
