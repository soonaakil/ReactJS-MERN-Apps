import React from 'react'
import CRUDDashboard from './CrudApplication/CrudApp.jsx'
// import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
// import AboutUs from './Pages/AboutUs'
// import Home from './Pages/Home'
// import ContactUs from './Pages/ContactUs'
// import Navbar from './Components/Navbar'
// import Users from './Pages/Users'
// import Users_Details from './Pages/Users_Details'
// import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <>
          {/* <Users /> */}
        {/* <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/users' element={<Users />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users/:id' element={<Users_Details />} />
          </Routes>
        </Router> */}
        <CRUDDashboard />
    </>
  )
}

export default App