import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./todoapp.css";

function TodoApp() {
  const [todos, setTodos] = useState([]); // To store the to-dos
  const [editingIndex, setEditingIndex] = useState(null); // For editing task state

  // Function to add a new to-do
  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  // Function to toggle task completion
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Function to delete a task
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Function to start editing a task
  const startEditing = (index) => {
    setEditingIndex(index);
  };

  // Function to save the edited task
  const saveEditedTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
    setEditingIndex(null); // Exit edit mode
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
        saveEditedTodo={saveEditedTodo}
        editingIndex={editingIndex}
      />
    </div>
  );
}

export default TodoApp;
