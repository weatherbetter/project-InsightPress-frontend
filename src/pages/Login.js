import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";
import NaverLogin from "./NaverLogin";
import { useDispatch, useSelector } from "react-redux";
import { setUserId } from "../store.js";

const Login = () => {
    let dispatch = useDispatch();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChangeId = (e) => setId(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission
        const data = {
            httpMethod: "POST",
            body: {
                userid: id,
                password: password,
            },
        };

        axios
            .post(`${process.env.REACT_APP_BOARD_API_URL}/auth/login`, data)
            .then((res) => {
                console.log(res);
                if (res.data.statusCode === 200) {
                    sessionStorage.setItem("JWT_TOKEN", res.data.body);
                    sessionStorage.setItem("user_id", id);
                    //   console.log(id);
                    //   dispatch(setUserId(id));
                    alert("Welcome to InsightPress!");
                    navigate("/");
                    // redux 로 유저 id 저장!
                } else {
                    sessionStorage.clear();
                    alert(
                        "Oops, Your account does not exist or wrong password"
                    );
                }
            })
            .catch((err) => console.log(err));
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLogin(e);
        }
    };

    const handleLogout = () => {
        sessionStorage.clear(); // .removeItem("JWT_TOKEN"); // 토큰 삭제

        alert("Logged out successfully.");
        navigate("/login");
    };

    return (
        <section id="contact" className="contact mb-5">
            <div className="container aos-init aos-animate" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-12 text-center mb-5">
                        <h3 className="page-title">Login</h3>
                    </div>
                </div>
                <div className="form col-sm-6 mx-auto">
                    <form></form>

                    <form
                        //   onSubmit={updatePost.id ? handlerUpdate : addPost}
                        className="php-email-form"
                    >
                        <div className="row">
                            <div className="form-group col-md-12">
                                <input
                                    className="form-control"
                                    id="disabledTextInput"
                                    type="text"
                                    aria-label="default input example"
                                    name="user"
                                    value={id}
                                    onChange={handleChangeId}
                                    placeholder="아이디를 입력해주세요"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                value={password}
                                className="form-control"
                                required
                                onChange={handleChangePassword}
                                onKeyPress={handleKeyPress}
                                placeholder="비밀번호를 입력해주세요"
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={handleLogin}>
                                Login
                            </button>{" "}
                        </div>
                    </form>
                </div>
                {/* <!-- End Contact Form --> */}
                <div style={{ textAlign: "center", padding: "30px" }}>
                    <KakaoLogin /> {/* 카카로 로그인 컴포넌트 추가 */}
                </div>
                <div style={{ textAlign: "center", padding: "30px" }}>
                    <NaverLogin />
                </div>
            </div>
        </section>
    );
};

export default Login;
