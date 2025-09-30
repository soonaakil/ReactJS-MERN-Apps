import React, { useState } from "react";
import "./signup.css";

const SignUP = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(name && email && password && conPass) {
       if(password === conPass) {
         return alert("SignUp Successfully");
       } else {
        return alert("Error: Password & Confirm Password Must be Same!");
       }
  } else {
    return alert("All Fields Are Mandatory!");
  }

  }  
  return (
    <>
      <div className="form-container">
        <h3>Digital Clock | Created by Mohd Aakil</h3>
        <form action="" onSubmit={handleSubmit}>
          <h1>SignUp</h1>
          <div className="align">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="username"
              id="name"
              onChange={(e)=> setName(e.target.value)}
              placeholder="Enter Your Name"
            />
            <p className={name ? "para" : "error"}>{name ? "" : "Error: Name is required"}</p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
            <p className={email ? "para" : "error"}>{email ? "" : "Error: Email is required"}</p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e)=> setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
            <p className={password ? "para" : "error"}>{password ? "" : "Error: Password is required"}</p>
            <label htmlFor="cpass">Confirm Password:</label>
            <input
              type="password"
              name="cpass"
              id="cpass"
              onChange={(e)=> setConPass(e.target.value)}
              placeholder="Enter Your Confirm Password"
            />
            <p className={conPass ? "para" : "error"}>{conPass ? "" : "Error: Confirm Password is required"}</p>
            <button type="submit">SignUp</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUP;
