import React, { useEffect, useState } from 'react'

const DataApi = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        setUsers(data);
    }
    fetchData();
    }, [])
    

  return (
    <>
        <h1>Hlo Chef | Here is the Api</h1>
        {users.map((user) => (
            <div key={user.id} style={{border: '2px solid black', margin: '10px', padding: '10px'}}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>
        ))}
    </>
  )
}

export default DataApi
