import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// EditPage 컴포넌트에서 userInfo 객체의 기본값을 설정
const defaultUserInfo = {
  id: '',
  username: '',
  email: '',
  password: ''
};

const EditPage = ({ userInfo = defaultUserInfo, onSave, onCancel }) => {
  const [userId, setUserId] = useState(userInfo.id); // 로그인된 회원의 ID 상태
  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);

  useEffect(() => {
    // 로그인된 회원의 ID를 가져오는 API 요청
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/login/mypage/{int:id}`);
        const userData = response.data; // 서버에서 반환하는 회원 정보
        setUsername(userData.username);
        setEmail(userData.email);
        setPassword(userData.password);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUser(); // 컴포넌트가 마운트될 때 회원 정보를 가져오도록 호출
  }, [userId]);

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

  const navigate = useNavigate(); // useNavigate hook를 사용하여 navigate 함수 얻어오기

  const handleCancel = () => {
    navigate('/MyPage'); // mypage로 이동
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

export default EditPage;
