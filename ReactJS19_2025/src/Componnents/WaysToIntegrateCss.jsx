import React from "react";
import './ExternalCSS.css';

const WaysToIntegrateCss = (props) => {
  const InternalCSS = {
    width: "400px",
    height: "200px",
    backgroundColor: "#eee",
    color: "#333",
    border: "2px solid red",
  };

  const MainCSS = {
    display: "flex",
    gap: '21px'
  }

  return (
    <>
      <h1>Hlo Chef | How to ways to Integrate CSS</h1>
      <div className="main-container" style={MainCSS}>
        <div
          className="container"
          style={{
            width: "400px",
            height: "200px",
            backgroundColor: "#000",
            color: "#fff",
            border: "2px solid red",
          }}
        >
          <h2 style={{ textAlign: "center" }}>This is a Inline CSS</h2>
          <h3>Your Name: {props.name}</h3>
          <p>Your Age: {props.age}</p>
          <p>Your Address: {props.address}</p>
        </div>

        <div className="container2nd" style={InternalCSS}>
          <h2 style={{ textAlign: "center" }}>This is a Internal CSS</h2>
          <h3>Your Name: {props.name}</h3>
          <p>Your Age: {props.age}</p>
          <p>Your Address: {props.address}</p>
        </div>

        <div className="container3rd">
          <h2 style={{ textAlign: "center" }}>This is a External CSS</h2>
          <h3>Your Name: {props.name}</h3>
          <p>Your Age: {props.age}</p>
          <p>Your Address: {props.address}</p>
        </div>
      </div>
    </>
  );
};

export default WaysToIntegrateCss;
