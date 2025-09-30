import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Navbar';

const ReactRouter = () => {
  return (
    <>
        {/* <h1>Hlo Chef | Here is the React Router DOM</h1> */}
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </>
  )
}

export default ReactRouter