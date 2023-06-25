import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditPage = ({ onSave, onCancel }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/mypage`);
        const userData = response.data;
        setUserInfo(userData);
        setUsername(userData.username);
        setEmail(userData.email);
        setPassword(userData.password);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleSave = async () => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/auth/editpage`, {
        token: localStorage.getItem('token'), // JWT 토큰을 요청에 포함하여 서버로 전송
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

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/MyPage');
  };

  return (
    <div>
      <h2>Edit My Page</h2>
      <div>
        <label>ID:</label>
        <span>{userInfo && userInfo.id}</span>
      </div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditPage;
