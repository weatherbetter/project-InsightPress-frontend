import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeId = (e) => setId(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    const data = {
      "httpMethod": "POST",
      "body": {
        userid: id,
        password: password,
     }
    };

    axios
      .post(`${process.env.REACT_APP_BOARD_API_URL}/auth/login`, data)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode === 200) {
          sessionStorage.setItem("JWT_TOKEN", res.data.body);
          window.location.href = "/";
          alert('Welcome to InsightPress!');
        } else {
          sessionStorage.clear();
          alert('Oops, Your account does not exist or the password is incorrect.');
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

    alert('Logged out successfully.');
    navigate('/login');
    
  };
  
  return (
      <div
          style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
          }}
      >
          <div>
              ID: <input type="text" value={id} onChange={handleChangeId} />
              <br />
              PW:{" "}
              <input
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                  onKeyPress={handleKeyPress}
              />
              <br />
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleLogout}>Logout</button>
          </div>
          <div id="showInputData"></div>
          <div style={{ textAlign: "center", padding: "30px" }}>
              <KakaoLogin /> {/* 카카로 로그인 컴포넌트 추가 */}
          </div>
      </div>
  );
};

export default Login;