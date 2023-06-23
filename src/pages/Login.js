import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeId = e => setId(e.target.value);
    const handleChangePassword = e => setPassword(e.target.value);
    const handleLogin = e => {
        const data = {
            id, 
            password
        };
        axios.post(`${process.env.REACT_APP_BOARD_API_URL}/login`, data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div>
                ID: <input type="text" value={id} onChange={handleChangeId} />
                <br/>
                PW: <input type="password" value={password} onChange={handleChangePassword} />
                <br/>
                <button onClick={handleLogin}>로그인</button>
            </div>
        </div>
    );
};

export default Login;
