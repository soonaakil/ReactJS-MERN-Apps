import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import './usersDetails.css';

const Users_Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "Piddi", email: "piddi@example.com" },
    { id: 2, name: "Chef", email: "chef@example.com" },
    { id: 3, name: "Your Name", email: "yourname@example.com" },
    { id: 4, name: "Lambert", email: "lambert@example.com" },
    { id: 5, name: "Liya", email: "liya@example.com" },
  ];

  //   const fetchUsers = users.filter((user) => user.id == id);
  const fetchUsers = users.find((user) => user.id == id);

  return (
    <>
      <h1>Hlo Chef | Here is the Users Details</h1>
      <div className="UserDetailsHere">
        {/* By Filter  */}
        {/* <p>{fetchUsers[0].id}</p>
        <p>{fetchUsers[0].name}</p>
        <p>{fetchUsers[0].email}</p> */}
        {/* By Find  */}
        {location.pathname == "/users/2" && <h1>{fetchUsers.name}</h1>}
        <div className="usersHere">
          <p>{fetchUsers.id}</p>
          <p className="yourName">{fetchUsers.name}</p>
          <p>{fetchUsers.email}</p>
          <button onClick={()=> navigate('/users')}>Back</button>
        </div>
      </div>
    </>
  );
};

export default Users_Details;
