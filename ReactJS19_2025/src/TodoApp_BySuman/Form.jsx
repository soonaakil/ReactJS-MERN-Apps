import React, { useEffect, useState } from "react";

const Form = ({ todos, setTodos, id, setId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(id) {
      updateById(id);
      setId("");
    } else {
      const obj = {
        id: Math.random,
        title,
        description,
      };

      setTodos([...todos, obj]);
    }


    // After add the todo field is empty
    setId("");
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
      if (id) {
        const updateData = todos.filter((todo) => todo.id === id);
        console.log(updateData[0]);
        setTitle(updateData[0].title);
        setDescription(updateData[0].description);
      }
    }, [id]
  );

  const updateById = (id)=> {
    const obj = {
      title,
      description
    }

    setTodos((prevData)=>prevData.map((todo)=>todo.id === id ? {...todo, ...obj} : todo));
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="container my-5 text-center">
          <input
            className="mx-2"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="mx-2"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {id && (<button className="btn btn-warning">Edit</button>)}
          {!id && (<button className="btn btn-warning">Add</button>)}
        </div>
      </form>
    </>
  );
};

export default Form;
