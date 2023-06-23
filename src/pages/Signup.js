import axios from "axios";
import { useState, useEffect } from "react";

const Signup = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleIdChange = (e) => setId(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = () => {
    console.log("ID:", id); 
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

  //   const data = {
  //     id,
  //     username,
  //     email,
  //     password,
  //   };

    axios
      .post(`${process.env.REACT_APP_BOARD_API_URL}/auth/signup`, {
        userid : id,
        username : username,
        email : email,
        password : password,
      })
      .then((res) => {
        console.log("suc");
        // setSignupSuccess(true); // Set the signup success state
        // showInputData(); // Call the function to display input data
      })
      .catch((err) => console.log(err));
  };

  // const showInputData = () => {
  //   console.log("ID:", id); 
  //   console.log("Username:", username);
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BOARD_API_URL}/articles`)
  //     .then((response) => {
  //       // Process the response data here if needed
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      {signupSuccess ? (
        <p>Sign Up Successfully!</p>
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default Signup;
