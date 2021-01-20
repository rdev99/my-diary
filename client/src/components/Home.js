import './Home.css';
import axios from 'axios';
import { useState } from 'react';
function Home(...props) {
    console.log(props[0].user);
    const [username,setusername] = useState('.....');
    const [name , setname] = useState('.....');
    const [diaryname,setdiaryname] = useState('.....');
    const [language,setlanguage] = useState('.....');
    return (
        <div>
            <div className="profile">
                <label className="text" for="username"> Username : </label>
                <input className="input" type="text" defaultValue={username}></input><br></br><br></br><br></br>
                <label className="text" for="name">Name : </label>
                <input className="input" type="text" defaultValue={name}></input><br></br><br></br><br></br>
                <label className="text" for="diaryname">Diary Name : </label>
                <input className="input" type="text" defaultValue={diaryname}></input><br></br><br></br><br></br>
                <label className="text" for="lang">Writing Language : </label>
                <input className="input" type="text" defaultValue={language}></input><br></br><br></br><br></br><br></br>
                <button className="btn-submit">Update Info</button>
            </div>
        </div>
    )
}
export default Home;