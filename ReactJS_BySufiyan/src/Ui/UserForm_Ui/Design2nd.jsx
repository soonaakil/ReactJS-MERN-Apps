import React, { useState } from "react";
import './design2nd.css'
const Design2nd = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    date: "",
    file: "",
    terms: ""
  });

  const [userList, setUserList] = useState([]);

  const handleChange = (e)=> {
    const { name, value } = e.target;
    setUserForm({...userForm, [name]: value})
  }

  const handleSubmit = (e)=> {
    e.preventDefault();

    setUserList([...userList, userForm]);
  }

  return (
    <>
      <div class="add-user-container">
        <div class="add-user-header">
          <h2>Add New User</h2>
          <p>Register a new team member with advanced details</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              type="text"
              id="fullName"
              name="name"
              value={userForm.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
            <label for="fullName">Full Name</label>
          </div>
          <div class="form-group">
            <input
              type="text"
              id="username"
              name="username"
              value={userForm.username}
              onChange={handleChange}
              placeholder="Username"
            />
            <label for="username">Username</label>
          </div>
          <div class="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={userForm.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            <label for="email">Email</label>
          </div>
          <div class="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userForm.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <label for="phone">Phone Number</label>
          </div>
          <div class="form-group">
            <select id="department" name="department" value={userForm.department} onChange={handleChange}>
              <option value="">Select Department</option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="hr">Human Resources</option>
            </select>
            <label for="department">Department</label>
          </div>
          <div class="form-group">
            <select id="role" name="role" value={userForm.role} onChange={handleChange} required>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
            <label for="role">Role</label>
          </div>
          <div class="form-group">
            <input type="date" id="startDate" name="date" value={userForm.date} onChange={handleChange} />
            <label for="startDate">Start Date</label>
          </div>
          <div class="form-group">
            <input
              type="file"
              id="profilePic"
              name="file"
              value={userForm.file}
              onChange={handleChange}
              accept="image/*"
            />
            <label for="profilePic">Profile Picture</label>
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="terms" name="terms" value={userForm.terms} onChange={handleChange} required />
            <label for="terms">I agree to the terms and conditions</label>
          </div>
          <button type="submit" class="add-user-button">
            Add User
          </button>
        </form>

        {
          userList.length > 0 ? (
            userList.map((user, i)=> (
              <div key={i}>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.department}</p>
                <p>{user.role}</p>
                <p>{user.date}</p>
                <p>{user.file}</p>
                <p>{user.terms}</p>
              </div>
            ))
          )
          : (<p>Data Not Found</p>)
        }
      </div>
    </>
  );
};

export default Design2nd;
