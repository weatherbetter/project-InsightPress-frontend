import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeId = (e) => setId(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleLogin = (e) => {
    const data = {
      userid: id,
      password: password,
    };

    axios
      .post(`${process.env.REACT_APP_BOARD_API_URL}/auth/login`, data)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode === 200) {
          sessionStorage.setItem("JWT_TOKEN", res.data.body);
          navigate('/');
        } else {
          sessionStorage.clear();
          alert('No User Found. Please Try Again.');
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
        PW:{" "}
        <input type="password" value={password} onChange={handleChangePassword} />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div id="showInputData"></div>
    </div>
  );
};

export default Login;
