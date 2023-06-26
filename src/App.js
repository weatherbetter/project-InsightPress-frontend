import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Article from "./pages/Article.js";
import Newpost from "./pages/Newpost.js";
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

function App() {
    // 로그인 여부
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("JWT_TOKEN")) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    });

    return (
        <>
            {/* <!-- ======= Header ======= --> */}
            <header
                id="header"
                className="header d-flex align-items-center fixed-top"
            >
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        <h1>InsightPress</h1>
                    </a>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className="dropdown">
                                <a href="#">
                                    <span>Categories</span>{" "}
                                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/article?category=0">정치</a>
                                    </li>
                                    <li>
                                        <a href="/article?category=1">경제</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/postqueue">Post queue</a>
                            </li>
                            <li>
                                <a href="/newpost">New Post</a>
                            </li>
                            <li>
                                <a href="/signup">Signup</a>
                            </li>
                            <li>
                                <a href="/login">
                                    {" "}
                                    {isLogin ? "Login" : "Logout"}
                                </a>
                            </li>
                            <li>
                                <a href="/MyPage">MyPage</a>
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
                        <Route path="/newpost" element={<Newpost />} />
                        <Route path="/updatepost/:id" element={<Newpost />} />
                        <Route path="/postqueue" element={<PostQueue />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/mypage/*" element={<MyPage />} />
                        <Route
                            path="/kakaoLogin"
                            element={<KakaoLogin exact={true} />}
                        />
                        <Route path="/EditPage" element={<EditPage />} />
                        <Route path="/Withdraw" element={<Withdraw />} />
                        <Route path="*" element={<Error404></Error404>} />
                    </Routes>
                </div>
            </main>
        </>
    );
}

export default App;
