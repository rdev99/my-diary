import './Home.css';
function Home() {
    return (
        <div>
            <div className="profile">
                <label className="text" for="username"> Username : </label>
                <input className="input" type="text" defaultValue="rdev99"></input><br></br><br></br><br></br>
                <label className="text" for="name">Name : </label>
                <input className="input" type="text" defaultValue="Devesh Ranjan"></input><br></br><br></br><br></br>
                <label className="text" for="diaryname">Diary Name : </label>
                <input className="input" type="text" defaultValue="Satyam"></input><br></br><br></br><br></br>
                <label className="text" for="lang">Writing Language : </label>
                <input className="input" type="text" defaultValue="English"></input><br></br><br></br><br></br><br></br>
                <button className="btn-submit">Update Info</button>
            </div>
        </div>
    )
}
export default Home;