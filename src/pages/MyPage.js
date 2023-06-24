import React, { useState, useEffect } from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import EditPage from './EditPage.js';
import Withdraw from './Withdraw.js';

function MyPage() {
  const [requestQueues, setRequestQueues] = useState([]);

  // Example user information
  const users = {
    userid: 'example_userid',
    username: 'John Doe',
    email: 'johndoe@example.com',
  };

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
        setRequestQueues(JSON.parse(response.data.body));
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <h2>My Page</h2>
      <p> Id: {users.userid}</p>
      <p> username: {users.username}</p>
      <p> email: {users.email}</p> 
      <p> password: {users.password} </p>
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
