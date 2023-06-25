import React, { useState, useEffect } from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import EditPage from './EditPage.js';
import Withdraw from './Withdraw.js';

function MyPage() {
  const [userInfo, setUserInfo] = useState(null);

  const handleEdit = () => {
    // Navigate to the edit page
    // Use the 'Navigate' component from react-router-dom
    return <Navigate to="/EditPage" />;
  };

  const handleWithdraw = () => {
    // Handle withdraw action
    // This can be a navigation or any other logic you want to perform
    console.log('Withdraw action triggered');
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BOARD_API_URL}/auth/login/mypage`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        setUserInfo(null);
      });
  }, []);

  if (!userInfo) {
    return <div>Please Login</div>;
  }

  const { id, username, email, password } = userInfo; // Assuming the field names in the users table

  return (
    <div>
      <h2>My Page</h2>
      <p>Id: {id}</p>
      <p>username: {username}</p>
      <p>email: {email}</p>
      <p>password: {password}</p>
      <button onClick={handleEdit}>
        <Link to="/EditPage">Edit My Page</Link>
      </button>
      <button onClick={handleWithdraw}>
        <Link to="/withdraw">Delete My Account</Link>
      </button>

      <Outlet />
    </div>
  );
}

export default MyPage;
