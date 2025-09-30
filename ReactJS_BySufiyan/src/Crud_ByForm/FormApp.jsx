import React, { useState } from "react";
import "./formApp.css";

const FormApp = () => {
  const [yourForm, setYourForm] = useState({
    yourName: "",
    yourEmail: "",
  });

  const [usersList, setUsersList] = useState([]); // State to hold users
  const [isEditMode, setIsEditMode] = useState(false); // Flag to check if we're editing
  const [editIndex, setEditIndex] = useState(null); // To keep track of the user being edited

  const handleInput = (e) => {
    const { name, value } = e.target;
    setYourForm({ ...yourForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      // Update existing user
      const updatedUsers = [...usersList];
      updatedUsers[editIndex] = yourForm;
      setUsersList(updatedUsers);

      // Reset the form and exit edit mode
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      // Add new user
      setUsersList([...usersList, yourForm]);
    }

    // Reset form
    setYourForm({
      yourName: "",
      yourEmail: "",
    });
  };

  const handleEdit = (index) => {
    // Populate the form with the selected user's details for editing
    setYourForm(usersList[index]);
    setIsEditMode(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    // Delete the user from the list
    const updatedUsers = usersList.filter((user, i) => i !== index);
    setUsersList(updatedUsers);
  };

  return (
    <>
      <div className="crudForm-container">
        <form onSubmit={handleSubmit}>
          <h2>{isEditMode ? "Edit User" : "Add User"}</h2>
          <input
            type="text"
            name="yourName"
            value={yourForm.yourName}
            onChange={handleInput}
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="yourEmail"
            value={yourForm.yourEmail}
            onChange={handleInput}
            placeholder="Enter Your Email"
          />
          <button type="submit">{isEditMode ? "Update" : "Add"}</button>
        </form>

        <h2>User List</h2>
        {usersList.length > 0 ? (
          usersList.map((user, index) => (
            <div key={index} className="user-item">
              <p>Name: {user.yourName}</p>
              <p>Email: {user.yourEmail}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No users added yet.</p>
        )}
      </div>
    </>
  );
};

export default FormApp;
