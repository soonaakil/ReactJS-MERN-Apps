import React from "react";

const Todos = ({ todos, deleteTodo, setId }) => {
  return (
    <>
      <div className="container text-center">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {todos.map((todo) => {
            return (
              <>
                <tbody key={todo.id}>
                  <tr>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>
                      <button className="btn btn-warning mx-3" onClick={()=> setId(todo.id)}>Edit</button>
                      <button className="btn btn-danger" onClick={()=> deleteTodo(todo.id)}>Delete</button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Todos;
