import React, { useReducer } from 'react';
import './formApp.css';

// Action types
const ADD_USER = 'ADD_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

// Initial state
const initialState = {
  usersList: [],
  yourName: '',
  yourEmail: '',
  isEditMode: false,
  editIndex: null
};

// Reducer function
function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, { yourName: state.yourName, yourEmail: state.yourEmail }],
        yourName: '',
        yourEmail: '',
      };
    case UPDATE_USER:
      const updatedUsers = [...state.usersList];
      updatedUsers[state.editIndex] = { yourName: state.yourName, yourEmail: state.yourEmail };
      return {
        ...state,
        usersList: updatedUsers,
        yourName: '',
        yourEmail: '',
        isEditMode: false,
        editIndex: null
      };
    case DELETE_USER:
      const filteredUsers = state.usersList.filter((_, index) => index !== action.payload);
      return { ...state, usersList: filteredUsers };
    default:
      return state;
  }
}

const FormApp = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_INPUT', payload: { [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.isEditMode) {
      dispatch({ type: UPDATE_USER });
    } else {
      dispatch({ type: ADD_USER });
    }
  };

  const handleEdit = (index) => {
    const user = state.usersList[index];
    dispatch({ type: 'SET_EDIT_MODE', payload: { yourName: user.yourName, yourEmail: user.yourEmail, editIndex: index } });
  };

  const handleDelete = (index) => {
    dispatch({ type: DELETE_USER, payload: index });
  };

  return (
    <div className="crudForm-container">
      <form onSubmit={handleSubmit}>
        <h2>{state.isEditMode ? 'Edit User' : 'Add User'}</h2>
        <input
          type="text"
          name="yourName"
          value={state.yourName}
          onChange={handleInput}
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          name="yourEmail"
          value={state.yourEmail}
          onChange={handleInput}
          placeholder="Enter Your Email"
        />
        <button type="submit">{state.isEditMode ? 'Update' : 'Add'}</button>
      </form>

      <h2>User List</h2>
      {state.usersList.length > 0 ? (
        state.usersList.map((user, index) => (
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

export default FormApp;
