import React, { createContext, useState, useContext } from 'react';
import './formApp.css';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);
  const [yourForm, setYourForm] = useState({
    yourName: '',
    yourEmail: ''
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setYourForm({ ...yourForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      const updatedUsers = [...usersList];
      updatedUsers[editIndex] = yourForm;
      setUsersList(updatedUsers);
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      setUsersList([...usersList, yourForm]);
    }

    setYourForm({
      yourName: '',
      yourEmail: ''
    });
  };

  const handleEdit = (index) => {
    setYourForm(usersList[index]);
    setIsEditMode(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = usersList.filter((_, i) => i !== index);
    setUsersList(updatedUsers);
  };

  return (
    <UserContext.Provider value={{
      usersList,
      yourForm,
      handleInput,
      handleSubmit,
      handleEdit,
      handleDelete,
      isEditMode
    }}>
      {children}
    </UserContext.Provider>
  );
};

const FormApp = () => {
  const { usersList, yourForm, handleInput, handleSubmit, handleEdit, handleDelete, isEditMode } = useContext(UserContext);

  return (
    <div className="crudForm-container">
      <form onSubmit={handleSubmit}>
        <h2>{isEditMode ? 'Edit User' : 'Add User'}</h2>
        <input
          type="text"
          name="yourName"
          value={yourForm.yourName}
          onChange={handleInput}
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          name="yourEmail"
          value={yourForm.yourEmail}
          onChange={handleInput}
          placeholder="Enter Your Email"
        />
        <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
      </form>

      <h2>User List</h2>
      {usersList.length > 0 ? (
        usersList.map((user, index) => (
          <div key={index}>
            <p>Name: {user.yourName}</p>
            <p>Email: {user.yourEmail}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
};

const App = () => (
  <UserProvider>
    <FormApp />
  </UserProvider>
);

export default App;
