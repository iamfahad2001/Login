import React, {useState} from "react";
import loginImg from "../../login.svg";
import "./style.css";
import axios from "axios";

const Register = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log({userName, email, password});
    const handleUserName = (e) => {
        setUserName(e.target.value)
    }
    const handleUserEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleUserPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {
        axios.post('http://localhost:3005/register', {
            userName: userName,
            email: email,
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
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="img"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" value={userName}
                               onChange={handleUserName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" value={email} onChange={handleUserEmail}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password" value={password}
                               onChange={handleUserPassword}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={handleApi}>
                    Register
                </button>
            </div>
        </div>
    )

}


export default Register;
