import React, { useState, useEffect } from 'react';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) { 
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.slice(0, 5)); // Limit to 5 for demo
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array: Fetch once on mount

  if (loading) {
    return (
      <div className="page">
        <h1>Users</h1>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h1>Users</h1>
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Users Dashboard</h1>
      <p>This page fetches and displays user data dynamically.</p>
      <ul className="users-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            <strong>{user.name}</strong> - {user.email} ({user.company.name})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
