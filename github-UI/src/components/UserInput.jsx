import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/userinput.css';

const UserInput = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error('User not found');
      setError('');
      console.log(username)
      navigate(`/profile/${username}`);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <section className="search-section">
      <div className="search-box">
        <h1>Find a GitHub Profile</h1>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
        {error && <p className="search-error">{error}</p>}
      </div>
    </section>
  );
};

export default UserInput;
