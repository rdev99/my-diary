import './Newentry.css';

function Newentry() {
    return (
        <div className="newentry">
            <div className="newentry-title">
                Enter Your todays thoughts:
            </div>
            <input type="text" className="txt-title" placeholder="Your diary title .........."></input><br></br>
            <textarea className="txt-area" placeholder="Your diary entry .........."></textarea><br></br>
            <button className="btn-submit1" type="submit">Add this entry</button>
        </div>
    )
}
export default Newentry;