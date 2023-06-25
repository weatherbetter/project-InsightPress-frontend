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
    e.preventDefault(); // Prevent form submission
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
          // document.getElementById("showInputData").textContent = `ID: ${id} | PW: ${password}`; // Show input data
          alert('Welcome to InsightPress!');
        } else {
          sessionStorage.clear();
          alert('No User Found. Please Try Again.');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
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
        <input type="password" value={password} onChange={handleChangePassword} onKeyPress={handleKeyPress} />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div id="showInputData"></div>
    </div>
  );
};

export default Login;
