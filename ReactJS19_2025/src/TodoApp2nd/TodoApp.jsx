import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "./todoapp.css";

// App Component
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [category, setCategory] = useState("work");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Task completion statistics
  const completedTasks = todos.filter((todo) => todo.completed);
  const pendingTasks = todos.filter((todo) => !todo.completed);

  // Handle adding a new task
  const handleAddTask = () => {
    if (todoText.trim() === "") return;

    const newTodo = {
      text: todoText,
      category,
      dueDate,
      priority,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoText("");
    setCategory("work");
    setDueDate("");
    setPriority("medium");
  };

  // Handle task toggle (completed)
  const toggleTaskCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Handle deleting a task
  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Filter tasks based on category, priority, or due date
  const filteredTodos = todos
    .filter((todo) =>
      filter === "all"
        ? true
        : filter === "completed"
        ? todo.completed
        : filter === "pending"
        ? !todo.completed
        : todo.priority === filter || todo.category === filter
    )
    .filter((todo) => todo.text.toLowerCase().includes(searchQuery.toLowerCase()));

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h1>To-Do App</h1>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </header>
      <div className="stats">
        <p>Completed Tasks: {completedTasks.length}</p>
        <p>Pending Tasks: {pendingTasks.length}</p>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filter Dropdown */}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="shopping">Shopping</option>
      </select>

      {/* Add Task Form */}
      <div className="task-form">
        <input
          type="text"
          placeholder="Add a task"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="shopping">Shopping</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Tasks List */}
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span>{todo.text}</span>
            <span>({todo.category})</span>
            <span>{todo.dueDate}</span>
            <span>{todo.priority}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Export Buttons */}
      <div className="export-buttons">
        <CSVLink data={todos}>Export to CSV</CSVLink>
        <button onClick={() => {
          const doc = new jsPDF();
          todos.forEach((todo, index) => {
            doc.text(`${todo.text} - ${todo.completed ? "Completed" : "Pending"}`, 10, 10 + index * 10);
          });
          doc.save("tasks.pdf");
        }}>
          Export to PDF
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
