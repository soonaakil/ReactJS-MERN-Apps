import React from "react";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  startEditing,
  saveEditedTodo,
  editingIndex,
}) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            startEditing={startEditing}
            saveEditedTodo={saveEditedTodo}
            editingIndex={editingIndex}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
