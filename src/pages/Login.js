import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeId = (e) => setId(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleLogin = (e) => {
    const data = {
      userid: id, // Corrected field name from 'id' to 'userid'
      password: password,
    };

    axios
      .post(`${process.env.REACT_APP_BOARD_API_URL}/auth/login`, data)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          // 로그인 성공 시 처리
          return true;
        } else {
          // 로그인 실패 시 처리
          document.getElementById("showInputData").innerHTML =
            "Account Not Found: Try Again!";
        }
      })
      .catch((err) => console.log(err));
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
        PW: <input type="password" value={password} onChange={handleChangePassword} />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div id="showInputData"></div>
    </div>
  );
};

export default Login;
