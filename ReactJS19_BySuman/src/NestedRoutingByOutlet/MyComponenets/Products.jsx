import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import './products.css';

const Products = () => {
  return (
    <>
        <div className="product-item">
          <div className="logo">
            <p>Hlo Chef</p>
          </div>
          <h2>Products Page</h2>
          <nav>
            <Link to={"phones"}>Phones</Link>
            <Link to={"laptops"}>Laptops</Link>
            <Link to={"cameras"}>Cameras</Link>
          </nav>
        </div>
        <div className="pro-section">
          <Outlet />
        </div>
    </>
  );
};

export default Products;

