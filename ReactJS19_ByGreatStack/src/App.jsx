import React from "react";
import './app.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>

      {/* <div className="dashboard-layout">
        <main className="dashboard-content">
        </main>
      </div> */}
    </>
  );
};

export default App;
