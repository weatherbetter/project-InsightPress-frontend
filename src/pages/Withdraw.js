import React, { useEffect } from 'react';
import axios from 'axios';

const WithdrawPage = ({ onWithdraw }) => {
  useEffect(() => {
    const deleteAccount = async () => {
      try {
        await axios.delete(`${process.env.REACT_APP_BOARD_API_URL}/auth/login/withdraw`);
        console.log('Account deletion successful');
        onWithdraw(); // Call the onWithdraw callback to perform additional actions if needed
      } catch (error) {
        console.error('Account deletion failed:', error);
      }
    };

    if (window.confirm("Are you sure you're leaving?")) {
      deleteAccount();
    }
  }, [onWithdraw]);

  return (
    <div>
      <h2>Delete Your Account</h2>
      <p>Sorry for you leaving. But you can come back anytime.</p>
      <button onClick={onWithdraw}>DELETE MY ACCOUNT</button>
    </div>
  );
};

export default WithdrawPage;
