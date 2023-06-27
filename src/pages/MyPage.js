import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, Link, Navigate } from "react-router-dom";

function MyPage() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem("JWT_TOKEN");
        if (token) {
            axios
                .post(`${process.env.REACT_APP_BOARD_API_URL}/auth/mypage`, {
                    token: token,
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.statusCode === 200) {
                        setUserInfo(res.data.body);
                    }
                })
                .catch((error) => {
                    console.error("Failed to fetch user data:", error);
                    setUserInfo(null);
                });
        } else {
            setUserInfo(null);
        }
    }, []);

    const handleEdit = () => {
        // Navigate to the edit page
        // Use the 'Navigate' component from react-router-dom
        return <Navigate to="/EditPage" />;
    };

    const handleWithdraw = () => {
        // Handle withdraw action
        // This can be a navigation or any other logic you want to perform
        console.log("Withdraw action triggered");
    };

    const mypage = () => {
        const { id, username, email } = userInfo;

        return (
            <div>
                <h2>My Page</h2>
                <p>Id: {id}</p>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <button onClick={handleEdit}>
                    <Link to="/EditPage">Edit My Page</Link>
                </button>
                <button onClick={handleWithdraw}>
                    <Link to="/withdraw">Delete My Account</Link>
                </button>
                <Outlet />
            </div>
        );
    };

    if (!userInfo) {
        return <div>Please Login</div>;
    }

    return <>{mypage()}</>;
}

export default MyPage;
