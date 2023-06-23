import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChangeId = (e) => setId(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleLogin = () => {
    const data = {
      id,
      password,
    };
    axios
      .post(`${process.env.REACT_APP_BOARD_API_URL}/login`, data)
      .then((res) => {
        console.log(res);
        // 로그인 성공 시 처리할 로직 작성
        history.push("/home"); // 로그인 후 이동할 페이지 경로
      })
      .catch((err) => {
        console.log(err);
        // 로그인 실패 시 처리할 로직 작성
      });
  };

  return (
    <>
      ID: <input type="text" value={id} onChange={handleChangeId} />
      <br />
      PW: <input type="password" value={password} onChange={handleChangePassword} />
      <br />
      <button onClick={handleLogin}>로그인</button>
    </>
  );
};

export default Login;
