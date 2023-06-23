import React, { useState } from 'react';

const EditPage = ({ userInfo, onSave }) => {
  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);

  const handleSave = () => {
    onSave({ username, email });
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
