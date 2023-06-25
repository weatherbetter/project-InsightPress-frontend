import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditPage = ({ onSave, onCancel }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = sessionStorage.getItem("JWT_TOKEN");
                if (token) {
                    const response = await axios.post(
                        `${process.env.REACT_APP_BOARD_API_URL}/auth/mypage`,
                        {
                            token: token,
                        }
                    );
                    console.log(response);
                    if (response.data.statusCode === 200) {
                        setUserInfo(response.data.body);
                        setUsername(response.data.body.username);
                        setEmail(response.data.body.email);
                        setPassword(response.data.body.password);
                    }
                } else {
                    setUserInfo(null);
                }
            } catch (error) {
                console.error("Failed to fetch user data:", error);
                setUserInfo(null);
            }
        };

        fetchUserInfo();
    }, []);

    const handleSave = () => {
        axios
            .put(`${process.env.REACT_APP_API_URL}/auth/editpage`, {
                token: localStorage.getItem("token"),
                username,
                email,
                password,
            })
            .then((response) => {
                console.log(
                    "User information updated successfully:",
                    response.data
                );
                onSave(); // Call the onSave callback to perform additional actions if needed
                alert("User info updated");
            })
            .catch((error) => {
                console.error("User information update failed:", error);
            });
    };

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/MyPage");
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
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default EditPage;
