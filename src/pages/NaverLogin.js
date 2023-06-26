import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NaverLogin = () => {
  const { naver } = window;

  const NAVER_CLIENT_ID = 'IWXnToZFXFW8le6dvfY';
  const NAVER_CALLBACK_URL = 'http:/localhost:3000/login';
  const navigate = useNavigate();

  const handleLoginWithNaver = (naverLogin) => {
    const data = {
      "httpMethod": "POST",
      "body": {
        userid: naverLogin.user.id,
        password: naverLogin.user.id, // 임시로 사용자 ID를 비밀번호로 설정
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
          alert('Oops, Your account does not exist or the password is incorrect.');
        }
      })
      .catch((err) => console.log(err));
  };

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: true,
      loginButton: { color: 'green', type: 3, height: 60 }
    });

    naverLogin.init();

    naverLogin.getLoginStatus(function (status) {
      if (status) {
        localStorage.setItem('UserName', naverLogin.user.name);
        localStorage.setItem('userNickname', naverLogin.user.nickname);
        localStorage.setItem('userPhoto', naverLogin.user.profile_image);

        handleLoginWithNaver(naverLogin);

        window.opener.location.href = "/";
        window.close();
      }
    });
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return null;
};

export default NaverLogin;
