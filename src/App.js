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
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

function App() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let isLogin = useSelector((state) => {
        return state.isLogin;
    });
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/assets/js/main.js";
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (sessionStorage.getItem("JWT_TOKEN")) {
            dispatch(setIsLogin(true));
        } else {
            dispatch(setIsLogin(false));
        }
    });

    return (
        <>
            <Header></Header>
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
                        <Route
                            path="/NaverLogin"
                            element={<NaverLogin exact={true} />}
                        />
                        <Route path="/EditPage" element={<EditPage />} />
                        <Route path="/Withdraw" element={<Withdraw />} />
                        <Route path="*" element={<Error404></Error404>} />
                    </Routes>
                </div>
            </main>
            <Footer></Footer>
            <a
                href="#"
                className="scroll-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    );
}

export default App;
