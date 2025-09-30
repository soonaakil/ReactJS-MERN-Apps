import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // State to hold the list of users and the current form data
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch all users (Read)
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  // Function to handle form input changes (Create and Update)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Create a new user
  const createUser = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setUser({ name: '', email: '' }); // Clear the form after successful create
    } catch (error) {
      console.error('Error creating user', error);
    }
  };

  // Update an existing user
  const updateUser = async (id) => {
    try {
      const updatedUser = { ...user, id };
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updatedUser
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? response.data : user))
      );
      setUser({ name: '', email: '' }); // Clear the form after successful update
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    <div className="App">
      <h1>React CRUD with Axios</h1>

      {/* Form for Create and Update */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
        />
        <button onClick={createUser}>Create User</button>
      </div>

      {/* List of Users */}
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name} ({user.email})</p>
            <button onClick={() => {
              setUser({ name: user.name, email: user.email });
              updateUser(user.id);
            }}>Update</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
