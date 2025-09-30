import React from "react";

function UserList({ users, editUser, deleteUser }) {
  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.email})
              <button onClick={() => editUser(user)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
