import React, { useState, useEffect } from 'react';
import '../styles/UserManager.css'; // Import styles
import { UserService } from '../services/UserService.js'; // Updated import path
import { toast } from 'react-toastify'; // Import toast for notifications

const UserManagerPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '' });
  const [creatingUser, setCreatingUser] = useState(false);
  const [deletingUser, setDeletingUser] = useState(null); // State to track which user is being deleted

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await UserService.getAllUsers(); // Fetch users
      
      // Check if the fetched data is an array before setting the state
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error('API returned data is not an array:', data);
        setError('Received unexpected data format from API.');
        setUsers([]); // Set to empty array to prevent map error
        toast.error('Received unexpected data format from API.');
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch users');
      setLoading(false);
      toast.error('Failed to load users.');
    }
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    try {
      const createdUser = await UserService.createUser(newUser);
      setUsers([...users, createdUser]); // Add the new user to the list
      setNewUser({ username: '', email: '', password: '' }); // Clear the form
      toast.success('User created successfully!');
    } catch (err) {
      console.error('Error creating user:', err);
      toast.error('Failed to create user.');
    } finally {
      setCreatingUser(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    // Optional: Add a confirmation dialog here
    if (window.confirm('Are you sure you want to delete this user?')) {
      setDeletingUser(userId);
      try {
        await UserService.deleteUser(userId);
        setUsers(users.filter(user => user.id !== userId)); // Remove user from the list
        toast.success('User deleted successfully!');
      } catch (err) {
        console.error(`Error deleting user ${userId}:`, err);
        toast.error(`Failed to delete user ${userId}.`);
      } finally {
        setDeletingUser(null);
      }
    }
  };

  // TODO: Implement update functions

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="user-manager-container">
      <h1>Quản Lý Người Dùng</h1>

      {/* Form for creating new user */}
      <div className="create-user-form">
        <h2>Tạo Người Dùng Mới</h2>
        <form onSubmit={handleCreateUser}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={newUser.username}
              onChange={handleNewUserChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newUser.email}
              onChange={handleNewUserChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={newUser.password}
              onChange={handleNewUserChange}
              required
            />
          </div>
          <button type="submit" disabled={creatingUser}>
            {creatingUser ? 'Creating...' : 'Create User'}
          </button>
        </form>
      </div>

      {/* User list table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {/* TODO: Implement update functionality */}
                <button className="edit-button">Edit</button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteUser(user.id)}
                  disabled={deletingUser === user.id} // Disable button while deleting
                >
                  {deletingUser === user.id ? 'Deleting...' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagerPage; 