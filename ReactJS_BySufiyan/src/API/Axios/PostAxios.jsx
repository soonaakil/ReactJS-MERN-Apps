import React, { useState } from 'react'
import './Designs/style.css'
import axios from 'axios'

const PostAxios = () => {
    // const [store, setStore] = useState([]);
    const [userData, setUserData] = useState({
        uname: "",
        email: ""
    });
    
    const handleInput = (e)=> {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleCreate = (e)=> {
        e.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/users", userData)
        .then((res)=> {
            console.log(res.data);
            setUserData(res.data)
        })
        .catch((err)=> {
            console.log("Here is the Error: ", err);
        })
    }

    return (
    <>
        <h1>Hlo Chef | Here is the Post Methods You created easily anythings</h1>
        <div className="postAxiosData">
            <h2>Created Data | Made By Mohd Aakil</h2>
            <h1>UserData</h1>
            <form action="" onSubmit={handleCreate}>
                <label htmlFor="uname">Username: </label>
                <input type="text" name='uname' id='uname' onChange={handleInput} placeholder='Enter Your Name' />
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' id='email' onChange={handleInput} placeholder='Enter Your Email' />
                <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default PostAxios
