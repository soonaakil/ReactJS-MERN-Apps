import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <header>
        <nav>
          <a href="#" className="logo">
            Hlo Chef
          </a>
          <ul className="nav-menu">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
          <a href="#contact" className="cta-button">
            Get Started
          </a>
          <div className="mobile-toggle">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </header>

      {/* Main Section  */}
      <section id="home" className="hero">
        {/* <h1>Hlo Chef | Here is the main Sections</h1> */}
        <Outlet />
      </section>

      {/* <!-- Footer --> */}
      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Hlo Chef</h3>
              <p>
                Empowering businesses with innovative tech solutions. Let's
                build the future together.
              </p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Info</h3>
              <ul>
                <li>Email: info@hlochef.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Tech Street, Silicon Valley, CA</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Hlo Chef. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;

