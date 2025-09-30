import React, { useState } from "react";
import "./style.css";

const UserIndex = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
  });
  const [usersList, setUsersList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Fixed

    if(!userForm.name.trim() || !userForm.email.trim() || !userForm.username.trim() || !userForm.role.trim()) {
        alert("All feilds are required");
        return;
    }

    if (isEdit) {
      const updatedUser = [...usersList];
      updatedUser[editIndex] = userForm;
      setUsersList(updatedUser);

      // When user is edited then exit the field
      setIsEdit(false);
      setEditIndex(null);
    } else {
      setUsersList([...usersList, userForm]);
    }

    // Optional: Reset the form after adding user
    setUserForm({
      name: "",
      username: "",
      email: "",
      role: "",
    });
  };

  const handleEdit = (index) => {
    setUserForm(usersList[index]);
    setIsEdit(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setUsersList(usersList.filter((user, i) => i !== index));
  };

  return (
    <>
      <div className="add-user-container">
        <h2> {isEdit ? "Update User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="name"
              value={userForm.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userForm.username}
              onChange={handleChange}
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userForm.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={userForm.role}
              onChange={handleChange}
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
          <button type="submit" className="add-user-button">
            {isEdit ? "Update User" : "Add User"}
          </button>
        </form>

        <div className="user-item">
          {usersList.length > 0 ? (
            usersList.map((user, i) => (
              <div key={i}>
                <div className="details">
                  <p>Name: {user.name}</p>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                </div>
                <button onClick={() => handleEdit(i)}>Edit</button>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </div>
            ))
          ) : (
            <p>No Data Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserIndex;
