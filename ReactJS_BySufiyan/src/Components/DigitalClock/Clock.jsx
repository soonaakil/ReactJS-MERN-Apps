import React, { useState } from "react";
import './clock.css';

const Clock = () => {
  const thisTime = new Date().toLocaleTimeString();
  const [curTime, setCurTime] = useState(thisTime);

  setInterval(() => {
    const thisTime = new Date().toLocaleTimeString();
    setCurTime(thisTime);
  }, 1000);
  // const curTime = new Date().toLocaleTimeString();
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         const newTime = new Date().toLocaleTimeString();
  //         setCurTime(newTime);
  //     }, 1000);

  //     return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="time-container">
        <h3>Digital Clock | Created by Mohd Aakil</h3>
        <h1>{curTime}</h1>
      </div>
    </>
  );
};

export default Clock;
