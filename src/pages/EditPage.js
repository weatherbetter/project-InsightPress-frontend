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

    // const handleSave = () => {
    //     axios
            
    //         .put(`${process.env.REACT_APP_BOARD_API_URL}/auth/editpage/${token}`, {
    //             // token: sessionStorage.getItem("JWT_TOKEN"),
    //             const token = sessionStorage.getItem("JWT_TOKEN");

    //             username: username,
    //             password: password,
    //         })
    //         .then((response) => {
    //             // onSave(); // Call the onSave callback to perform additional actions if needed
    //             alert("User info updated");
    //         })
    //         .catch((error) => {
    //             console.error("User information update failed:", error);
    //         });
    // };

    // const navigate = useNavigate();

    // const handleCancel = () => {
    //     navigate("/MyPage");
    // };

    const handleSave = () => {
        const token = sessionStorage.getItem("JWT_TOKEN");
        
        axios
          .put(`${process.env.REACT_APP_BOARD_API_URL}/auth/editpage/${token}`, {
            username: username,
            password: password,
          })
          .then((response) => {
            // onSave(); // Call the onSave callback to perform additional actions if needed
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
        <div className="container">
            <div className="section-header d-flex justify-content-between align-items-center">
                <h2>Edit Profile</h2>
            </div>
            <section className="section profile">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                <i
                                    className="bi bi-person-circle"
                                    style={{
                                        fontSize: "72px",
                                    }}
                                ></i>
                                <h2>{userInfo && userInfo.id}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-9">
                        <div className="">
                            <div>
                                <h5 className="card-title">Profile Details</h5>
                                <div className="alert alert-warning" role="alert">
                                    <p>
                                        Your PW needs to contain at 6 or more
                                        characters, including at least one uppercase
                                        letter, one lowercase letters, one digit, and
                                        one special character.
                                    </p>
                                </div>

                                <div className="row mb-3">
                                    <label
                                        htmlFor="renewPassword"
                                        className="col-md-4 col-lg-3 col-form-label"
                                    >
                                        Username
                                    </label>
                                    <div className="col-md-3 col-lg-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label
                                        htmlFor="renewPassword"
                                        className="col-md-4 col-lg-3 col-form-label"
                                    >
                                        Email
                                    </label>
                                    <div className="col-md-3 col-lg-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label
                                        htmlFor="renewPassword"
                                        className="col-md-4 col-lg-3 col-form-label"
                                    >
                                        Password
                                    </label>
                                    <div className="col-md-3 col-lg-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="">
                                        <button
                                            type="submit"
                                            className="btn btn-secondary"
                                            onClick={() => {
                                                handleSave();
                                            }}
                                        >
                                            Save
                                        </button>{" "}
                                        <button
                                            type="submit"
                                            className="btn btn-danger"
                                            onClick={() => {
                                                handleCancel();
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EditPage;
