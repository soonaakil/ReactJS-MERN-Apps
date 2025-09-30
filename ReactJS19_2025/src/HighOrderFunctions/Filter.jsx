import React from 'react'

const Filter = () => {
    const person = [
        {id: 1, name: 'Chef', active: true},
        {id: 1, name: 'Sketch', active: false},
        {id: 1, name: 'Piddi', active: true},
        {id: 1, name: 'Sher', active: false},
        {id: 1, name: 'Ghazi', active: true}
    ];

    const findActivePerson = person.filter((user)=> user.active);

    return (
    <>
        <h1>Hlo Chef | Here is the Filter Functions</h1>
        <h3>{findActivePerson.map((user)=> <div>
            {user.name}
        </div>)}</h3>
    </>
  )
}

export default Filter
