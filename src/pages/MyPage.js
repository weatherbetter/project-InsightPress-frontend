import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MyPage() {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
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

    const handleWithdraw = () => {
        // Handle withdraw action
        // This can be a navigation or any other logic you want to perform
        console.log("Withdraw action triggered");
    };

    const mypage = () => {
        const { id, username, email } = userInfo;

        return (
            <div className="container">
                <div className="section-header d-flex justify-content-between align-items-center">
                    <h2>USER INFO</h2>
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
                                    <h2>{id}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-9">
                            <div className="">
                                <div>
                                    <h5 className="card-title">
                                        Profile Details
                                    </h5>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 label ">
                                            Username
                                        </div>
                                        <div className="col-lg-9 col-md-8">
                                            {username}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 label">
                                            Email
                                        </div>
                                        <div className="col-lg-9 col-md-8">
                                            {email}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="">
                                            <button
                                                type="submit"
                                                className="btn btn-secondary"
                                                onClick={() =>
                                                    navigate("/EditPage")
                                                }
                                            >
                                                Edit My Account
                                            </button>{" "}
                                            <button
                                                type="submit"
                                                className="btn btn-danger"
                                                onClick={() => {
                                                    // handleWithdraw()
                                                    navigate("/withdraw");
                                                }}
                                            >
                                                Delete My Account
                                            </button>
                                            <Outlet />
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

    if (!userInfo) {
        return <div>Please Login</div>;
    }

    return <>{mypage()}</>;
}

export default MyPage;
