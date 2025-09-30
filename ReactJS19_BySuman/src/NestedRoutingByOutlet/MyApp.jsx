import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom"; 
import Layout from "./MyComponenets/Layout.jsx";
import Products from "./MyComponenets/Products.jsx";
import Phones from "./MyComponenets/Phones.jsx";
import Laptops from "./MyComponenets/Laptops.jsx";
import Cameras from "./MyComponenets/Cameras.jsx";
import Home from "./MyComponenets/Home.jsx";
import About from "./MyComponenets/About.jsx";
import Profile from "./MyComponenets/Profile.jsx";

// Loader function for GitHub profile 
// --------------------------------------------------- 
// async function githubProfileLoader() { 
//   const res = await fetch("https://api.github.com/users/soonaakil"); 
//   if (!res.ok) throw new Error("Failed to fetch GitHub profile"); 
//   return res.json(); 
// }

// Layout component 
// --------------------------------------------------- 
// function Layout() { 
//   return ( 
//     <div> 
//       <header> 
//         <h1>My Shop</h1> 
//         <nav> 
//           <Link to="/">Home</Link> |{" "} 
//           <Link to="/products">Products</Link> |{" "} 
//           <Link to="/about">About</Link> |{" "} 
//           <Link to="/profile" prefetch="intent">Profile</Link> 
//         </nav> 
//       </header> 
 
//       <main> 
//         <Outlet /> {/* Child routes render here */} 
//       </main> 
 
//       <footer> 
//         <p>© 2025 My Shop</p> 
//       </footer> 
//     </div> 
//   ); 
// }

// Router setup 
// --------------------------------------------------- 
// const router = createBrowserRouter([ 
//   { 
//     path: "/", 
//     element: <Layout />, 
//     children: [ 
//       { index: true, element: <Home /> }, 
//       { path: "about", element: <About /> }, 
//       { path: "products", element: <Products /> }, 
//       { path: "profile", element: <Profile />, loader: githubProfileLoader }, 
//     ], 
//   }, 
// ]); 

const MyApp = () => {
  return (
    <>
      {/* <h1>Hlo Chef | Here is My App - Designed by Aakil</h1> */}
      {/* return <RouterProvider router={router} />;  */}

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />}>
              <Route path="phones" element={<Phones />} />
              <Route path="laptops" element={<Laptops />} />
              <Route path="cameras" element={<Cameras />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MyApp;
