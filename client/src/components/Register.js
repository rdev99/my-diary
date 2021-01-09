import { useState } from 'react';
import './Register.css';

function Register(...props) {
    console.log(props[0].login);
    const [username,setusername] = useState('');
    const [name,setname] = useState('');
    const [diary,setdiary] = useState('');
    const [password,setpassword] = useState('');
    const [repassword,setrepassword] = useState('');
    function register() {
        props[0].login('rdev');
    }
    return (
        <>
            <div className="register">
                <label className="register-usrname">Username : </label>
                <input className="register-username-input" onChange={event => {setusername(event.target.value)}}></input><br></br>
                <label className="register-name">Name : </label>
                <input className="register-name-input" onChange={event => {setname(event.target.value)}}></input><br></br>
                <label className="register-diaryname">Diary Name : </label>
                <input className="register-diaryname-input" onChange={event => {setdiary(event.target.value)}}></input><br></br>
                <label className="register-password">Password : </label>
                <input className="register-password-input" type="password" onChange={event => {setpassword(event.target.value)}}></input><br></br>
                <label className="register-repassword">Re-enter Password : </label>
                <input className="register-repassword-input" type="password" onChange={event => {setrepassword(event.target.value)}}></input><br></br>
                <button className="register-button" onClick={register}>Register</button>
            </div>
        </>
    )
}
export default Register;