import React, { useState } from 'react';
import axios from 'axios';

const EditPage = ({ userInfo, onSave }) => {
  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);

  const handleSave = async () => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/user`, {
        username,
        email,
      });
      console.log('User information updated successfully:', response.data);
      onSave(); // Call the onSave callback to perform additional actions if needed
    } catch (error) {
      console.error('User information update failed:', error);
    }
  };

  return (
    <div>
      <h2>회원 정보 수정</h2>
      <label>이름:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>이메일:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSave}>저장</button>
    </div>
  );
};

export default EditPage;
