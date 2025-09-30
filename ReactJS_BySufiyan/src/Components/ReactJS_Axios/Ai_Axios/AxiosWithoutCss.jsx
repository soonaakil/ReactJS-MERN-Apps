import React, { useState, useEffect } from 'react';
import AxiosInstance from './AxiosInstance';

const Axios = () => {
  // State variables for CRUD operations
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', body: '' });
  const [updateItem, setUpdateItem] = useState({ id: null, title: '', body: '' });

  // Fetch all data (Read)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get('/posts'); // Assuming the API endpoint is '/posts'
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
      setNewItem({ title: '', body: '' }); // Reset the form
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
      setUpdateItem({ id: null, title: '', body: '' }); // Reset the form
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
    <div>
      <h1>CRUD with Axios</h1>

      {/* Create Form */}
      <div>
        <h2>Create New Post</h2>
        <input
          type="text"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          value={newItem.body}
          onChange={(e) => setNewItem({ ...newItem, body: e.target.value })}
          placeholder="Body"
        />
        <button onClick={handleCreate}>Create</button>
      </div>

      {/* Update Form */}
      <div>
        <h2>Update Post</h2>
        <input
          type="text"
          value={updateItem.title}
          onChange={(e) => setUpdateItem({ ...updateItem, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          value={updateItem.body}
          onChange={(e) => setUpdateItem({ ...updateItem, body: e.target.value })}
          placeholder="Body"
        />
        <button onClick={handleUpdate}>Update</button>
      </div>

      {/* Posts List */}
      <h2>Posts List</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <button
              onClick={() => setUpdateItem({ id: post.id, title: post.title, body: post.body })}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Axios;
