import React, { useState } from 'react'

const Counter = () => {
   let  [count, setCount] = useState(0);

    // const countHandle = ()=> {
    //     setCount(count++);
    // }

  return (
    <>
        {/* <button onClick={countHandle}>Counter{count}</button> */}
        {/* <button onClick={()=> setCount(count +1)}>Counter{count}</button> */}
        <h1>{count}</h1>
        <button onClick={()=> setCount((count)=> count + 1)}>Counter Inc</button>
        <button onClick={()=> setCount((count)=> count - 1)}>Counter Dec</button>
    </>
  )
}

export default Counter