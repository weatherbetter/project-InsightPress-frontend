import React, { useState } from 'react';
import axios from 'axios';

const EditPage = ({ userInfo, onSave, onCancel }) => {
  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);

  const handleSave = async () => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/auth/login/mypage/{int:id}`, {
        username,
        email,
        password
      });
      console.log('User information updated successfully:', response.data);
      onSave(); // Call the onSave callback to perform additional actions if needed
    } catch (error) {
      console.error('User information update failed:', error);
    }
  };

  const handleCancel = () => {
    onCancel(); // Call the onCancel callback to perform additional actions if needed
  };

  return (
    <div>
      <h2>Edit My Page</h2>
      <label>Username: </label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditPage;
