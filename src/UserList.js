import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users data from JSONPlaceholder API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUser(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle user click to show details
  const handleUserClick = (user) => {
    setSelectedUser(selectedUser?.id === user.id ? null : user);
  };

  // Loading state
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">❌ {error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <div className="header">
        <h1>👥 User Directory</h1>
        <p className="subtitle">Total Users: <span className="count">{listOfUser.length}</span></p>
      </div>

      <div className="users-grid">
        {listOfUser.map((user) => (
          <div 
            key={user.id} 
            className={`user-card ${selectedUser?.id === user.id ? 'active' : ''}`}
            onClick={() => handleUserClick(user)}
          >
            <div className="user-avatar">
              <span>{user.name.charAt(0)}</span>
            </div>
            
            <div className="user-info">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-username">@{user.username}</p>
            </div>

            <div className="user-contact">
              <p className="user-email">
                <span className="icon">✉️</span>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </p>
              <p className="user-phone">
                <span className="icon">📱</span>
                {user.phone}
              </p>
              <p className="user-website">
                <span className="icon">🌐</span>
                <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </p>
            </div>

            {selectedUser?.id === user.id && (
              <div className="user-details">
                <div className="details-section">
                  <h4>Company</h4>
                  <p>{user.company.name}</p>
                  <p className="catch-phrase">"{user.company.catchPhrase}"</p>
                </div>

                <div className="details-section">
                  <h4>Address</h4>
                  <p>
                    {user.address.street}, {user.address.suite}<br/>
                    {user.address.city}, {user.address.zipcode}
                  </p>
                </div>

                <div className="details-section">
                  <h4>Geo Location</h4>
                  <p>
                    Latitude: {user.address.geo.lat}<br/>
                    Longitude: {user.address.geo.lng}
                  </p>
                </div>
              </div>
            )}

            <div className="expand-icon">
              {selectedUser?.id === user.id ? '▼' : '▶'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
