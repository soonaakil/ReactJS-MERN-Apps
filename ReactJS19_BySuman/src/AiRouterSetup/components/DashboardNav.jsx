import React from 'react';
import { NavLink, useResolvedPath, useMatch } from 'react-router-dom';

function DashboardNav() {
  return (
    <aside className="dashboard-nav">
      <h3>Dashboard Menu</h3>
      <ul>
        <li>
          <NavLink 
            to="/dashboard/users" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/dashboard/settings" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

// Custom hook for exact matching in nested routes (optional enhancement)
function CustomNavLink({ to, children, ...props }) {
  const location = useResolvedPath(to);
  const isActive = useMatch({ path: location.pathname, end: true });

  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive: defaultIsActive }) => 
        (defaultIsActive || isActive) ? 'active' : ''
      }
    >
      {children}
    </NavLink>
  );
}

export default DashboardNav;
