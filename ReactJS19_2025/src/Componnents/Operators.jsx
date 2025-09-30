import React from 'react'

const Operators = (props) => {
  return (
    <>
        <h1>Hlo Chef | Here is the Operators</h1>
        <p>Your Name: {props.name}</p>
        <p>Your Age: {props.age}</p>
        <p>Your Address: {props.address}</p>
        {/* This is a And Operators */}
        {/* { props.salary && <p>Your Salary: {props.salary}</p> }  */}
        {/* And this Operators is Ternary Operators */}
        { props.salary ? <p>Your Salary: {props.salary}</p> : "Your salary is waiting.." }
    </>
  )
}

export default Operators
