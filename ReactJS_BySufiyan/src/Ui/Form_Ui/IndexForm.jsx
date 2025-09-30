import React, { useState } from "react";
import "./style.css";

const IndexForm = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
  });
  const [usersList, setUsersList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.yourName.trim() || !formData.yourEmail.trim()) {
      alert("Please fill out both fields.");
      return;
    } else if (isEdit) {
      const userUpdated = [...usersList];
      userUpdated[editIndex] = formData;
      setUsersList(userUpdated);

      setIsEdit(false);
      setEditIndex(null);
    } else {
      setUsersList([...usersList, formData]);
    }

    // Reset form
    setFormData({
      yourName: "",
      yourEmail: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(usersList[index]);
    setIsEdit(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setUsersList(usersList.filter((user, i) => i !== index));
  };

  return (
    <>
      <div className="crudForm-container">
        <form onSubmit={handleSubmit}>
          <h2>{isEdit ? "Update User" : "Add User"}</h2>
          <input
            type="text"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="yourEmail"
            value={formData.yourEmail}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
          <button type="submit">{isEdit ? "Update" : "Add"}</button>
        </form>

        <h2>User List</h2>

        <div className="user-item">
          {usersList.length > 0 ? (
            usersList.map((user, index) => (
              <div key={index}>
                <p>Name: {user.yourName}</p>
                <p>Email: {user.yourEmail}</p>
                <button onClick={()=> handleEdit(index)}>Edit</button>
                <button onClick={()=> handleDelete(index)}>Delete</button>
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

export default IndexForm;
