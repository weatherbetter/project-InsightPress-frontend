import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handlerChangeId = e => setId(e.target.value);
    const handlerChangePassword = e => setPassword(e.target.value);
    const handlerLogin = e => {
        const data = {
            id, 
            password
        };
        axios.post(`${process.env.REACT_APP_BOARD_API_URL}/login`, data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return (
        <>
            ID: <input type="text" value={id} onChange={handlerChangeId} />
            <br/>
            PW: <input type="password" value={password} onChange={handlerChangePassword} />
            <br/>
            <button onClick={handlerLogin}>로그인</button>
        </>
    );
};

export default Login;
