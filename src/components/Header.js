import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin, setUpdatePost, setUserId } from "../store.js";

const Header = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let isLogin = useSelector((state) => {
        return state.isLogin;
    });
    let user_id = useSelector((state) => {
        return state.user_id;
    });
    const handlerLogout = (e) => {
        sessionStorage.clear();
        localStorage.clear();
        dispatch(setUserId(""));
        navigate("/login");
    };

    return (
        <header
            id="header"
            className="header d-flex align-items-center fixed-top"
        >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a
                    onClick={() => {
                        navigate("/");
                    }}
                    className="logo d-flex align-items-center"
                >
                    <h1>InsightPress</h1>
                </a>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                                <span>Categories</span>{" "}
                                <i className="bi bi-chevron-down dropdown-indicator"></i>
                            </a>
                            <ul>
                                <li>
                                    <a
                                        onClick={() => {
                                            navigate("/article?category=0");
                                        }}
                                    >
                                        정치
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => {
                                            navigate("/article?category=1");
                                        }}
                                    >
                                        경제
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    navigate("/postqueue");
                                }}
                            >
                                Post queue
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    dispatch(setUpdatePost({}));
                                    navigate("/newpost");
                                }}
                            >
                                New Post
                            </a>
                        </li>
                        {isLogin ? null : (
                            <li>
                                <a
                                    onClick={() => {
                                        navigate("/signup");
                                    }}
                                >
                                    Signup
                                </a>
                            </li>
                        )}
                        <li>
                            {isLogin ? (
                                <a
                                    onClick={() => {
                                        handlerLogout();
                                        navigate("/login");
                                    }}
                                >
                                    Logout
                                </a>
                            ) : (
                                <a
                                    onClick={() => {
                                        navigate("/login");
                                    }}
                                >
                                    Login
                                </a>
                            )}
                        </li>
                        {user_id ? (
                            <li>
                                <a
                                    onClick={() => {
                                        navigate("/MyPage");
                                    }}
                                >
                                    {user_id}'s Mypage
                                </a>
                            </li>
                        ) : null}
                    </ul>
                </nav>
                {/* <!-- .navbar --> */}
                <div className="position-relative">
                    <i className="bi mobile-nav-toggle bi-list"></i>
                </div>
            </div>
        </header>
    );
};

export default Header;
