import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NaverLogin = () => {
  let navigate = useNavigate();

  const NAVER_CLIENT_ID = 'IIWXnToZFXFW8le6dvfY';
  const NAVER_CALLBACK_URL = 'http://localhost:3000/login';

//   const [userInfo, setUserInfo] = useState(null);

  const initializeNaverLogin = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
    //   isPopup: true,
      isPopup: false,
      loginButton: { color: 'green', type: 3 , height: 60 }
    });

    naverLogin.init();

    naverLogin.getLoginStatus(function (status) {
      if (status) {
        // localStorage.setItem('userName', naverLogin.user.name);
        // localStorage.setItem('userNickname', naverLogin.user.nickname);
        // localStorage.setItem('userPhoto', naverLogin.user.profile_image);
        sessionStorage.setItem(
            "JWT_TOKEN",
            naverLogin.user.name
        );

        // setUserInfo(naverLogin.user.name);

        // window.opener.location.href = "/";
        // window.close();
        navigate("/");
      }
    });
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

//   useEffect(() => {
//     if (userInfo) {
//         console.log("userinfo:", userInfo);
//     }
//   }, [userInfo]);

  return <div id="naverIdLogin" />;
};

export default NaverLogin;


// const NaverLogin = () => {
//   const { naver } = window;

//   const NAVER_CLIENT_ID = 'IIWXnToZFXFW8le6dvfY';
//   const NAVER_CALLBACK_URL = 'http://localhost:3000/login';

//   const initializeNaverLogin = () => {
//     const naverLogin = new naver.LoginWithNaverId({
//       clientId: NAVER_CLIENT_ID,
//       callbackUrl: NAVER_CALLBACK_URL,
//       isPopup: true,
//       loginButton: { color: 'green', type: 3 , height: 60 }
//     });

//     naverLogin.init();

//     naverLogin.getLoginStatus(function (status) {
//       if (status) {
//         localStorage.setItem('userName', naverLogin.user.name);
//         localStorage.setItem('userNickname', naverLogin.user.nickname);
//         localStorage.setItem('userPhoto', naverLogin.user.profile_image);

//         window.opener.location.href = "/login";
//         window.close();
//       }
//     });
//   };

//   useEffect(() => {
//     initializeNaverLogin();
//   }, []);

//   return <div id="naverIdLogin" />;
// };

// export default NaverLogin;