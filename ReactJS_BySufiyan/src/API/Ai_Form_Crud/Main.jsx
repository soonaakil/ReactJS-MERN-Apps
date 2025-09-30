import React, { useState } from "react";
import UserForm from "./UserForm.jsx";
import UserList from "./UserList.jsx";
import './main.css';

function Main() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="main-container">
      <h1>React CRUD (Frontend Only)</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
      />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
}

export default Main;
