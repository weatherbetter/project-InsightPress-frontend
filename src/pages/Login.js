import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import NaverLogin from "./NaverLogin";
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
          navigate('/');
          alert('Welcome to InsightPress!');
        } else {
          sessionStorage.clear();
          alert('Oops, Your account does not exist or Wrong Password.');
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
    axios
      .post(`${process.env.REACT_APP_BOARD_API_URL}/auth/logout`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode === 200) {
          sessionStorage.removeItem("JWT_TOKEN"); // 토큰 삭제
          axios.post(`${process.env.REACT_APP_LAMBDA_API_URL}/logout`) // 로그아웃 람다 함수 호출
            .then((res) => {
              console.log(res);
              if (res.data.statusCode === 200) {
                navigate('/login'); // 로그인 페이지로 이동
                alert('Logged out successfully.');
              } else {
                alert('Failed to log out.');
              }
            })
            .catch((err) => console.log(err));
        } else {
          alert('Failed to log out.');
        }
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <>
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
          <input type="password" value={password} onChange={handleChangePassword} onKeyPress={handleKeyPress} />
          <br />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div id="showInputData"></div>
      </div>
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <NaverLogin />
      </div>
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
              <KakaoLogin />
          </div>
      </div>
    </>
  );
};

export default Login;
