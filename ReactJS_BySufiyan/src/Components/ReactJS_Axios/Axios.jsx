import React, { useEffect, useState } from "react";
import axios from "axios";
import './axios.css';

const Axios = () => {
//   const [store, setStore] = useState();

  const data = {
    fname: "",
    lname: "",
  };
  const [inputData, setInputData] = useState(data);
 
  // How to get data by Axios
  // Methods 1st
  const getData = (e)=> {
    e.preventDefault();
      axios.get("https://jsonplaceholder.typicode.com/users", inputData)
      .then((res)=> {
        //   console.log(res);
             setInputData(res.data);
             console.log(inputData);
      })
      .catch((error)=> console.error(error));
  }
  // Methods 2nd
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
    useEffect(() => {
      getData();
    }, []);

  // How to post data by Axios
  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", inputData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //     handleSubmit();
  // }, [])

  return (
    <>
      <h1>Hlo Chef | Here is Axios</h1>
      <div className="axios-form">
        <h3>Axios Form | Created by Mohd Aakil</h3>
        <h1>Axios Form</h1>
        <form>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            onChange={handleInput}
            placeholder="Enter Your First Name"
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            onChange={handleInput}
            placeholder="Enter Your Last Name"
          />
          <button onClick={getData}>Get Users</button>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </form>
      </div>
    </>
  );
};

export default Axios;
