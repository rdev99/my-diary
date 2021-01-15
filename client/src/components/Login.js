import { useState } from 'react';
import axios from 'axios';
import './Login.css';
function Login(...props) {
    const [loginid,setloginid] = useState('');
    const [password,setpassword] = useState('');
    // console.log(props[0].login);
    function login() {
        axios.post('http://localhost:5000/login',{
            usrname : loginid,
            password : password
        }).then(function(response) {
            console.log(response);
            if(response.data==='Login')
            {
                props[0].login(loginid);
            }
        }).catch(err => {
            console.log(err);
        })
        // props[0].login('rdev');
    }
    return ( 
        <div className="login">
            <label type="text" className="loginid">Login id: </label>
            <input className="loginidinput" onChange={event => {setloginid(event.target.value)}}></input><br></br>
            <label className="password">Password:</label>
            <input type="password" className="passwordinput" onChange={event => {setpassword(event.target.value)}}></input><br></br>
            <button className="login-button" onClick={login}>Login</button>
        </div>
    )
}
export default Login;