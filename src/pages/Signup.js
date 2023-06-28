import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const Signup = () => {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupSuccess, setSignupSuccess] = useState(false);

    const handleIdChange = (e) => setId(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    // const handleSignup = () => {
    //     //   const data = {
    //     //     id,
    //     //     username,
    //     //     email,
    //     //     password,
    //     //   };

    //     axios
    //         .post(`${process.env.REACT_APP_BOARD_API_URL}/auth/signup`, {
    //         "body":{
    //             userid: id,
    //             username: username,
    //             email: email,
    //             password: password,}
    //         })
    //         .then((res) => {
    //          setSignupSuccess(true); // Set the signup success state
    //          sessionStorage.setItem(res.data.body);
    //          // showInputData(); // Call the function to display input data
    //          alert("Sign Up Sucessfully!");
    //          navigate("/")
    //         }) else {
    //             sessionStorage.resetItem(res.data.body);
    //             alert(
    //                 "Oops, Try again with your new id and password"
    //             );
    //         }
    //     })
    //     .catch((err) => {});
    // };


    // const handleSignup = () => {
    //     axios
    //       .post(`${process.env.REACT_APP_BOARD_API_URL}/auth/signup`, {
    //         body: {
    //           userid: id,
    //           username: username,
    //           email: email,
    //           password: password,
    //         },
    //       })
    //       .then((response) => {
    //         setSignupSuccess(true); // Set the signup success state
    //         sessionStorage.setItem(response.data.body);
    //         // showInputData(); // Call the function to display input data
    //         alert("Sign Up Sucessfully!");
    //         navigate("/");
    //       }) // Add opening curly brace here
    //       .catch((err) => {
    //         sessionStorage.resetItem(err.response.data.body);
    //         alert("Oops, Try again with your new id and password");
    //       });
    //   };
      
    const handleSignup = e => {
        e.preventDefault();
        
        axios
          .post(`${process.env.REACT_APP_BOARD_API_URL}/auth/signup`, {
            userid: id,
            username: username,
            email: email,
            password: password,
          })
          .then((response) => {
            setSignupSuccess(true); // Set the signup success state
            sessionStorage.setItem("key", response.data.body);
            // showInputData(); // Call the function to display input data
            alert("Sign Up Successfully!");
            navigate("/");
          })
          .catch((err) => {
            sessionStorage.removeItem("key");
            alert("Oops, Try again with your new id and password");
          });
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
        <section id="contact" className="contact mb-5">
            <div className="container aos-init aos-animate" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-12 text-center mb-5">
                        <h3 className="page-title">Sign up</h3>
                    </div>
                </div>
                <div className="form col-sm-6 mx-auto">
                    <form className="php-email-form  mb-5">
                        <div className="alert alert-warning" role="alert">
                            <p>
                                Your ID should contain 6 or more, but less than
                                15 alphabets and numbers.{" "}
                            </p>
                            <p>
                                Your PW needs to contain at 6 or more
                                characters, including at least one uppercase
                                letter, one lowercase letters, one digit, and
                                one special character.
                            </p>
                        </div>
                        <div className="form-group col-md-12">
                            <input
                                className="form-control"
                                id="id"
                                type="text"
                                value={id}
                                onChange={handleIdChange}
                                placeholder="아이디를 입력해주세요"
                                required
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <input
                                className="form-control"
                                id="username"
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder="유저명을 입력해주세요"
                                required
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <input
                                className="form-control"
                                id="email"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="이메일을 입력해주세요"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="form-control"
                                required
                                placeholder="비밀번호를 입력해주세요"
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={handleSignup}>
                                Sign Up
                            </button>{" "}
                        </div>{" "}
                    </form>
                    {signupSuccess ? (
                        <p>
                            <div className="alert alert-primary" role="alert">
                                Sign Up Successfully!
                            </div>
                        </p>
                    ) : null}
                </div>
                {/* <!-- End Contact Form --> */}
            </div>
        </section>
    );
};

export default Signup;
