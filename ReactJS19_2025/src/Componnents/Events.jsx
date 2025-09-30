import React from "react";

const Events = () => {
  const handleClick = () => {
    alert("Hlo Chef");
  };

  return (
    <>
      <div className="container" style={{
        marginBottom: '100px'
      }}>
        <h1>Hlo Chef | Here is the Events</h1>
        <button onClick={handleClick} style={{
          backgroundColor: 'red',
          color: '#fff',
          padding: '11px',
          border: 'none',
          fontSize: '21px',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginTop: '21px',
          marginLeft: '100px',
          cursor: 'pointer'
        }}>Click me</button>
      </div>
    </>
  );
};

export default Events;
