import React from 'react'

const Map = () => {
    const person = ['Chef', 'Sketch', 'Sher', 'Salaar'];

  return (
    <>
        <h1>Hlo Chef | Here is the Map Functions</h1>
        {person.map((data)=><div>
            <h1>{data}</h1>
        </div>)}
    </>
  )
}

export default Map