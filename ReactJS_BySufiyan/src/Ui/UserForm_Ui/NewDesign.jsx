import React from "react";
import './design.css';

const NewDesign = () => {
  return (
    <>
      <div class="add-user-container">
        <div class="add-user-header">
          <h2>Add New User</h2>
          <p>Create a new account for your team</p>
        </div>
        <form>
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              placeholder="Enter full name"
            />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter username"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter email address"
            />
          </div>
          <div class="form-group">
            <label for="role">Role</label>
            <select id="role" name="role" required>
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
          <button type="submit" class="add-user-button">
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default NewDesign;
