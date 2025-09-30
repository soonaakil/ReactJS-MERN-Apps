import React, { useEffect, useState } from "react";

function UserForm({ addUser, updateUser, editingUser }) {
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editingUser) {
      setForm(editingUser);
    } else {
      setForm({ name: "", email: "" });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Please fill in all fields");
      return;
    }

    if (editingUser) {
      updateUser(form);
    } else {
      addUser(form);
    }

    setForm({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">{editingUser ? "Update" : "Add"}</button>
    </form>
  );
}

export default UserForm;
