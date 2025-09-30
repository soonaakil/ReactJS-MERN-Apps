import React from 'react'

const Props = (props) => {
  return (
    <>
        <h1>Hlo Chef | Here is the Props</h1>
        <p>Your Name: {props.name}</p>
        <p>Your Age: {props.age}</p>
        <p>Your Address: {props.address}</p>
    </>
  )
}

export default Props