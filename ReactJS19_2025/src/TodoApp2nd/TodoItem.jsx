import React, { useState } from "react";

function TodoItem({
  todo,
  index,
  toggleTodo,
  deleteTodo,
  startEditing,
  saveEditedTodo,
  editingIndex,
}) {
  const [newText, setNewText] = useState(todo.text);

  // Handle editing task
  const handleEdit = () => {
    saveEditedTodo(index, newText);
  };

  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "gray" : "black",
      }}
    >
      {editingIndex === index ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
          />
          {todo.text}
          <button onClick={() => startEditing(index)}>Edit</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
