import React,{useState} from "react";

import loginImg from "../../login.svg";
import "./style.css";
import axios from "axios";


const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleUserName = (e) => {
        setUserName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleApi = () => {
        axios.post('http://localhost:3005/login', {
            username: userName,
            password: password
        })
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="img"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" value={userName} onChange={handleUserName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"  value={password} onChange={handlePassword}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={handleApi}>
                    Login
                </button>
            </div>
        </div>
    );
}
export default Login;
