import { useState } from 'react';
import axios from 'axios';
import './Login.css';
import bcrypt from 'bcryptjs';
function Login(...props) {
    const [loginid,setloginid] = useState('');
    const [password,setpassword] = useState('');
    // console.log(props[0].login);
    async function login() {
        if(password === '')
        {
            alert('Please Enter Password');
        }
        else
        {
            axios.post('http://localhost:5000/login',{
                usrname : loginid
            }).then(function(response) {
                // console.log(response);
                if(response.status===200)
                {
                    // props[0].login(response);
                    bcrypt.compare(password,response.data.password,function(err,res) {
                        console.log(res);
                        if(res)
                        {
                            props[0].login(response);
                        }
                        else {
                            alert('Incorrect Password')
                        }
                        if(err)
                        {
                            alert('Error we are working on it');
                        }
                    })
                }
            }).catch(err => {
                if(err.response.status===404)
                {
                    alert('Login id not found')
                }
                else if(err.response.status===500)
                {
                    alert('server error')
                }
                else 
                {
                    alert('Error we are working on it')
                }
            })
        }
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