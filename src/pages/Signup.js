import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => setId(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = () => {
    const data = {
      id,
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
        <label htmlFor="id" style={{ marginRight: "10px", width: "80px", textAlign: "right" }}>ID:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={handleIdChange}
        />
      </div>

      <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
        <label htmlFor="username" style={{ marginRight: "10px", width: "80px", textAlign: "right" }}>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

      <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
        <label htmlFor="email" style={{ marginRight: "10px", width: "80px", textAlign: "right" }}>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
        <label htmlFor="password" style={{ marginRight: "10px", width: "80px", textAlign: "right" }}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <button onClick={handleSignup} style={{ marginTop: "10px" }}> Sign Up </button>
    </div>
  );
};

export default Signup;
