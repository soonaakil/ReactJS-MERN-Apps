import React, { useState } from "react";
import "./todos.css";

const Todos = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  // console.log(task);
  
  const addTask = () => {
    if (task.trim() === '') return;
    console.log(task);
    let store = [...data, task];
    setData(store);
    setTask("")
  };
  
  const deleteTask = (index) => {
    const deletedTask = data.filter((curVal, id) => {
      return index !== id;
    });
    setData(deletedTask);
    // console.log(index);
  }

  return (
    <>
      <div className="container">
        <div className="box">
        <h3>Todo App | Created by Mohd Aakil</h3>

          <div className="addTask">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter Your Task"
            />
            <button onClick={addTask}>Add</button>
          </div>
          {
            data.map((curVal, index)=> {
              return (
                <div key={index} className="showTask">
                   <p>{curVal}</p>
                   <i onClick={()=> deleteTask(index)}>🗑️</i>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Todos;
