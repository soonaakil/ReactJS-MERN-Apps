// src/App.js
import React, { useState } from 'react';
import './todo.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  // Add a new task
  const addTask = () => {
    if (task.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setTask('');
  };

  // Delete a task
  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Start editing
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  // Save edited task
  const saveEditedTask = (id) => {
    if (editedText.trim() === '') return;
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: editedText } : todo
      )
    );
    setEditingId(null);
    setEditedText('');
  };

  return (
    <div className="App">
      <h1>📝 React Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => saveEditedTask(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => toggleComplete(todo.id)}
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
                <button className="delete" onClick={() => deleteTask(todo.id)}>
                  ❌
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
