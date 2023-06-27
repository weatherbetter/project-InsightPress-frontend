import { useEffect } from "react";

const NaverLogin = () => {
  const { naver } = window;

  const NAVER_CLIENT_ID = 'IIWXnToZFXFW8le6dvfY';
  const NAVER_CALLBACK_URL = 'http://localhost:3000/login';

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: true,
      loginButton: { color: 'green', type: 3 , height: 60 }
    });

    naverLogin.init();

    naverLogin.getLoginStatus(function (status) {
      if (status) {
        localStorage.setItem('userName', naverLogin.user.name);
        localStorage.setItem('userNickname', naverLogin.user.nickname);
        localStorage.setItem('userPhoto', naverLogin.user.profile_image);

        window.opener.location.href = "/";
        window.close();
      }
    });
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return <div id="naverIdLogin" />;
};

export default NaverLogin;