import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = () => {
    const data = {
      username,
      email,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_BOARD_API_URL}/signup`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <button onClick={handleSignup}> Sign Up </button>

      <div style={{marinBottom: "20px"}}></div>
    </div>
  );
};

export default Signup;
