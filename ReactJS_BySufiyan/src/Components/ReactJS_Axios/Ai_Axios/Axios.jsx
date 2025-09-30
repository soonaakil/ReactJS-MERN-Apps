import React, { useState, useEffect } from 'react';
import AxiosInstance from './AxiosInstance';
import './axios.css';

const Axios = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', body: '' });
  const [updateItem, setUpdateItem] = useState({ id: null, title: '', body: '' });

  // Fetch all data (Read)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get('/posts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Create data (Create)
  const handleCreate = async () => {
    try {
      const response = await AxiosInstance.post('/posts', {
        title: newItem.title,
        body: newItem.body,
      });
      setData([response.data, ...data]);
      setNewItem({ title: '', body: '' });
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  // Update data (Update)
  const handleUpdate = async () => {
    try {
      const response = await AxiosInstance.put(`/posts/${updateItem.id}`, {
        title: updateItem.title,
        body: updateItem.body,
      });
      const updatedData = data.map((item) =>
        item.id === updateItem.id ? response.data : item
      );
      setData(updatedData);
      setUpdateItem({ id: null, title: '', body: '' });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  // Delete data (Delete)
  const handleDelete = async (id) => {
    try {
      await AxiosInstance.delete(`/posts/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="axios-container">
      <h1>CRUD with Axios</h1>

      {/* Create Form */}
      <div className="form-container">
        <h2>Create New Post</h2>
        <input
          type="text"
          className="input-field"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          className="textarea-field"
          value={newItem.body}
          onChange={(e) => setNewItem({ ...newItem, body: e.target.value })}
          placeholder="Body"
        />
        <button className="btn" onClick={handleCreate}>Create</button>
      </div>

      {/* Update Form */}
      <div className="form-container">
        <h2>Update Post</h2>
        <input
          type="text"
          className="input-field"
          value={updateItem.title}
          onChange={(e) => setUpdateItem({ ...updateItem, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          className="textarea-field"
          value={updateItem.body}
          onChange={(e) => setUpdateItem({ ...updateItem, body: e.target.value })}
          placeholder="Body"
        />
        <button className="btn" onClick={handleUpdate}>Update</button>
      </div>

      {/* Posts List */}
      <h2>Posts List</h2>
      <ul className="post-list">
        {data.map((post) => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className="button-group">
              <button className="btn delete-btn" onClick={() => handleDelete(post.id)}>Delete</button>
              <button
                className="btn update-btn"
                onClick={() => setUpdateItem({ id: post.id, title: post.title, body: post.body })}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Axios;
