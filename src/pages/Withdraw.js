import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Withdraw = ({ onWithdraw, onCancel }) => {
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

    // const handleWithdraw = () => {
    //     axios
    //         .delete(`${process.env.REACT_APP_BOARD_API_URL}/auth/withdraw/${sessionStorage.getItem("JWT_TOKEN")} )`
                
    //             // token: sessionStorage.removeItem("JWT_TOKEN"),
    //             // username: username,
    //             // email: email,
    //             // password: password,
                
            
    //         .then((response) => {
    //             // onSave(); // Call the onSave callback to perform additional actions if needed
    //             alert("User info deleted. Hope To See You Again!");
    //         })
    //         .catch((error) => {
    //             console.error("User information delete failed:", error);
    //         });
    // };

    // const navigate = useNavigate();

    // const handleCancel = () => {
    //     navigate("/MyPage");
    // };

    const handleWithdraw = () => {
        const token = sessionStorage.getItem("JWT_TOKEN");
        axios
          .delete(`${process.env.REACT_APP_BOARD_API_URL}/auth/withdraw/${token}`, { headers: { authorization: token } })
          .then((response) => {
            // onSave(); // Call the onSave callback to perform additional actions if needed
            sessionStorage.clear();
            alert("User info deleted. Hope To See You Again!");
          })
          .catch((error) => {
            console.error("User information delete failed:", error);
          });
      };
      
      const navigate = useNavigate();
      
      const handleCancel = () => {
        navigate("/MyPage");
      };
      

    return (
        <div className="container">
            <div className="section-header d-flex justify-content-between align-items-center">
                <h2>Delete Profile</h2>
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
                                <h5 className="card-title">Delete Profile</h5>
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
                                                handleWithdraw();
                                            }}
                                        >
                                            Delete
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

export default Withdraw;