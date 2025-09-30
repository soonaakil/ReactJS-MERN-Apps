import React from "react";
import { Link, NavLink } from 'react-router-dom'
import './users.css'

const Users = () => {
  const users = [
    { id: 1, name: "Piddi", email: "piddi@example.com" },
    { id: 2, name: "Chef", email: "chef@example.com" },
    { id: 3, name: "Your Name", email: "yourname@example.com" },
    { id: 4, name: "Lambert", email: "lambert@example.com" },
    { id: 5, name: "Liya", email: "liya@example.com" },
  ];

  return (
    <>
      <h1>Hlo Chef | Check the Users Details</h1>
      <div className="userDetails">
        {users.map((user) => {
          return (
            <div key={user.id} className="items">
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
