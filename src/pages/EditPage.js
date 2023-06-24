import React, { useState, useEffect } from 'react';
import axios from 'axios';

const defaultUserInfo = {
  id: '',
  username: '',
  email: '',
  password: ''
};

const EditPage = ({ userInfo = defaultUserInfo, onSave, onCancel }) => {
  const [userId, setUserId] = useState(userInfo.id);
  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/login/mypage/${userId}`);
        const userData = response.data;
        setUsername(userData.username);
        setEmail(userData.email);
        setPassword(userData.password);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSave = async () => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/auth/login/mypage/${userId}`, {
        username,
        email,
        password
      });
      console.log('User information updated successfully:', response.data);
      onSave();
    } catch (error) {
      console.error('User information update failed:', error);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <h2>Edit My Page</h2>
      <div>
        <label>ID:</label>
        <span>{userId}</span>
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

const MyPage = () => {
  const handleCancel = () => {
    // 취소 시 수행할 동작을 정의합니다.
  };

  return (
    <div>
      <EditPage onCancel={handleCancel} />
    </div>
  );
};

export default MyPage;
