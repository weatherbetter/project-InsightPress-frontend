import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home.js";
import Article from "./pages/Article.js";
import Newpost from "./pages/Newpost.js";
import "./App.css";
import PostQueue from "./pages/PostQueue.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import MyPage from "./pages/MyPage.js";
import EditPage from "./pages/EditPage.js";
import Withdraw from "./pages/Withdraw.js";
import ArticleCategory from "./pages/ArticleCategory.js";
import Error404 from "./pages/Error404.js";
import KakaoLogin from "./pages/KakaoLogin.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin, setUpdatePost } from "./store.js";
import NaverLogin from "./pages/NaverLogin.js"; 

function App() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let isLogin = useSelector((state) => {
        return state.isLogin;
    });

    useEffect(() => {
        if (sessionStorage.getItem("JWT_TOKEN")) {
            dispatch(setIsLogin(true));
        } else {
            dispatch(setIsLogin(false));
        }
    });

    const handlerLogout = e => {
        sessionStorage.clear();  
        navigate("/login");      
    };

    return (
        <>
            {/* <div style={{textAign: 'center', padding: '30px'}}>
                <NaverLogin/>
            </div> */}
            {/* <!-- ======= Header ======= --> */}
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
                            <li>
                                <a
                                    onClick={() => {
                                        navigate("/signup");
                                    }}
                                >
                                    Signup
                                </a>
                            </li>
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
                            <li>
                                <a
                                    onClick={() => {
                                        navigate("/MyPage");
                                    }}
                                >
                                    MyPage
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- .navbar --> */}
                    <div className="position-relative">
                        <i className="bi mobile-nav-toggle bi-list"></i>
                        {/* <!-- ======= Search Form ======= --> */}
                        <div className="search-form-wrap js-search-form-wrap">
                            <form
                                action="search-result.html"
                                className="search-form"
                            >
                                <span className="icon bi-search"></span>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="form-control"
                                />
                                <button className="btn js-search-close">
                                    <span className="bi-x"></span>
                                </button>
                            </form>
                        </div>
                        {/* <!-- End Search Form --> */}
                    </div>
                </div>
            </header>
            {/* <!-- End Header --> */}
            <main id="main">
                <div className="App">
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route
                            path="/article"
                            element={<ArticleCategory></ArticleCategory>}
                        />
                        <Route path="/article/:id" element={<Article />} />
                        <Route
                            path="/newpost"
                            element={<Newpost/>}
                        />
                        <Route path="/updatepost/:id" element={<Newpost />} />
                        <Route path="/postqueue" element={<PostQueue />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/mypage/*" element={<MyPage />} />
                        <Route
                            path="/kakaoLogin"
                            element={<KakaoLogin exact={true} />}
                        />
                        {/* <Route 
                            path="/NaverLogin"
                            element={<NaverLogin exact={true} />}
                        /> */}
                        <Route path="/EditPage" element={<EditPage />} />
                        <Route path="/Withdraw" element={<Withdraw />} />
                        <Route path="*" element={<Error404></Error404>} />
                    </Routes>
                </div>
            </main>

            <div style={{ textAlign: "center", padding: "30px" }}>
                <NaverLogin />
            </div>
        </>
    );
}

export default App;