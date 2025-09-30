import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import DashboardNav from './components/DashboardNav';
import UsersPage from './components/UsersPage';
import SettingsPage from './components/SettingsPage';
import './ai_app.css'; // Optional: Add basic styles

function Ai_App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* Nested Routes */}
            <Route index element={<UsersPage />} /> {/* Default: /dashboard */}
            <Route path="users" element={<UsersPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// Top-level pages
function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to the app! Navigate using the menu above.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This is a simple about section.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="page">
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

// Layout for Dashboard (includes nested nav and outlet for children)
function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <DashboardNav />
      <main className="dashboard-content">
        <Outlet /> {/* Renders nested route components here */}
      </main>
    </div>
  );
}

export default Ai_App;
