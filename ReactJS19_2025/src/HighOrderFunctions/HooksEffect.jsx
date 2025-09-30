import React, { useEffect, useState } from 'react'

const HooksEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;

    }, [count])
    

  return (
    <>
        <h1>Hlo Chef | Here is the Effect Hooks</h1>
        <h3>{count}</h3>
        <button onClick={()=> setCount(count + 1)}>Increase</button>
        <button onClick={()=> setCount(count - 1)}>Decrease</button>
    </>
  )
}

export default HooksEffect