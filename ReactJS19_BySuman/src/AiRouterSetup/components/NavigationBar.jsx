import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <nav className="top-nav">
      <div className="nav-brand">
        <NavLink to="/" exact>My App</NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            About
          </NavLink>
        </li>
        {!isDashboard && (
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Dashboard
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavigationBar;
