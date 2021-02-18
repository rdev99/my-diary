import './Newentry.css';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Newentry(...props) {
    const history = useHistory();
    const [title,settitle] = useState('');
    const [entry,setentry] = useState('');
    function postdata() {
        let data={
            title,
            entry
        }
        let username = props[0].data.data.usrname;
        let url='http://localhost:5000/diary/'+username;
        axios.post(url,data).then(function(response) {
            if(response.status===201)
            {
                props[0].login(response);
                history.push('/view');
            }
        })
    }

    return (
        <div className="newentry">
            <div className="newentry-title">
                Enter Your todays thoughts:
            </div>
            <input type="text" className="txt-title" onChange={event => {settitle(event.target.value)}} placeholder="Your diary title .........."></input><br></br>
            <textarea className="txt-area" onChange={event => {setentry(event.target.value)}} placeholder="Your diary entry .........."></textarea><br></br>
            <button onClick={postdata} className="btn-submit1" type="submit">Add this entry</button>
        </div>
    )
}
export default Newentry;