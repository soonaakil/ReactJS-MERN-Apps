import React, { useState } from 'react';

// User shape (for reference - no TypeScript needed)
const userShape = {
  id: 'string',
  name: 'string',
  email: 'string',
  role: 'string',
  createdAt: 'string'
};

// Todo shape (for reference)
const todoShape = {
  id: 'string',
  title: 'string',
  completed: 'boolean',
  createdAt: 'string'
};

const CrudApp = () => {
  const [activeTab, setActiveTab] = useState('users');  // 'users' or 'todos'
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user',
    title: '',
    completed: false
  });

  // Sample data for demonstration (replace with API calls later)
  const sampleUsers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'user',
      createdAt: '2024-01-16'
    }
  ];

  const sampleTodos = [
    {
      id: '1',
      title: 'Complete project documentation',
      completed: false,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Review code changes',
      completed: true,
      createdAt: '2024-01-14'
    }
  ];

  const handleCreate = () => {
    setIsCreateModalOpen(true);
    setFormData({
      name: '',
      email: '',
      role: 'user',
      title: '',
      completed: false
    });
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
    if (item.name) {  // User item
      setFormData({
        name: item.name,
        email: item.email,
        role: item.role,
        title: '',
        completed: false
      });
    } else {  // Todo item
      setFormData({
        name: '',
        email: '',
        role: 'user',
        title: item.title,
        completed: item.completed
      });
    }
  };

  const handleDelete = (id) => {
    // TODO: Manual integration - Call your delete API here
    console.log('Delete item with ID:', id);
    // Example: fetch(`/api/${activeTab}/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
  };

  const handleCloseModals = () => {
    setIsCreateModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedItem(null);
  };

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    // TODO: Manual integration - Call your create API here
    console.log('Create new item:', formData);
    // Example: fetch(`/api/${activeTab}`, { method: 'POST', body: JSON.stringify(formData), ... });
    handleCloseModals();
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    // TODO: Manual integration - Call your update API here
    console.log('Update item:', { id: selectedItem.id, ...formData });
    // Example: fetch(`/api/${activeTab}/${selectedItem.id}`, { method: 'PUT', body: JSON.stringify(formData), ... });
    handleCloseModals();
  };

  const currentData = activeTab === 'users' ? sampleUsers : sampleTodos;
  const isUsersTab = activeTab === 'users';

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">CRUD Dashboard</h1>
          <button 
            onClick={handleCreate} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Create New
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-6 py-2 font-medium transition-colors ${
              activeTab === 'users'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab('todos')}
            className={`px-6 py-2 font-medium transition-colors ${
              activeTab === 'todos'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Todos
          </button>
        </div>

        {/* Data Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Card Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              {isUsersTab ? 'Users Management' : 'Todo Items'}
            </h2>
            <p className="text-gray-600 mt-1">
              {isUsersTab
                ? 'Manage system users and their permissions'
                : 'Manage your todo items and track progress'
              }
            </p>
          </div>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {isUsersTab ? (
                    <>
                      <th className="text-left p-3 text-gray-900 font-semibold">Name</th>
                      <th className="text-left p-3 text-gray-900 font-semibold">Email</th>
                      <th className="text-left p-3 text-gray-900 font-semibold">Role</th>
                      <th className="text-left p-3 text-gray-900 font-semibold">Created</th>
                    </>
                  ) : (
                    <>
                      <th className="text-left p-3 text-gray-900 font-semibold">Title</th>
                      <th className="text-left p-3 text-gray-900 font-semibold">Status</th>
                      <th className="text-left p-3 text-gray-900 font-semibold">Created</th>
                    </>
                  )}
                  <th className="text-left p-3 text-gray-900 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    {isUsersTab ? (
                      <>
                        <td className="p-3 text-gray-900">{item.name}</td>
                        <td className="p-3 text-gray-600">{item.email}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.role === 'admin'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {item.role}
                          </span>
                        </td>
                        <td className="p-3 text-gray-600">{item.createdAt}</td>
                      </>
                    ) : (
                      <>
                        <td className="p-3 text-gray-900">{item.title}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.completed
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.completed ? 'Completed' : 'Pending'}
                          </span>
                        </td>
                        <td className="p-3 text-gray-600">{item.createdAt}</td>
                      </>
                    )}
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-blue-600 hover:text-blue-700 px-3 py-1 text-sm font-medium transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-700 px-3 py-1 text-sm font-medium transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {currentData.length === 0 && (
                  <tr>
                    <td colSpan={isUsersTab ? 5 : 4} className="p-8 text-center text-gray-500">
                      No {activeTab} found. Create one to get started!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create/Edit Modal */}
        {(isCreateModalOpen || isEditModalOpen) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  {isEditModalOpen ? `Edit ${isUsersTab ? 'User ' : 'Todo'}` : `Create New ${isUsersTab ? 'User ' : 'Todo'}`}
                </h3>
                <p className="text-gray-600 mt-1">
                  {isEditModalOpen ? `Update ${isUsersTab ? 'user' : 'todo item'} details` : `Add a new ${isUsersTab ? 'user' : 'todo item'}`}
                </p>
              </div>
              
              {/* Modal Form */}
              <form onSubmit={isEditModalOpen ? handleSubmitEdit : handleSubmitCreate} className="p-6 space-y-4">
                {isUsersTab ? (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Role
                      </label>
                      <select
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="user">User </option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                      </label>
                      <input
                        id="title"
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="Enter todo title"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="completed"
                        checked={formData.completed}
                        onChange={(e) => setFormData({...formData, completed: e.target.checked})}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="completed" className="text-sm font-medium text-gray-900">
                        Completed
                      </label>
                    </div>
                  </>
                )}
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModals}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                  >
                    {isEditModalOpen ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrudApp;
