import { useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './components/Home';
import Newentry from './components/Newentry';
import Viewentry from './components/Viewentry';
import Viewmenu from './components/Viewmenu';
import NavbarLogin from './components/common/NavbarLogin';
import Login from './components/Login';
import Register from './components/Register';



function Activelogin() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/create" component={Newentry}></Route>
          <Route path="/view" exact component={Viewmenu}></Route>
          <Route path="/view/:id" component={Viewentry}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
  )
}

function NotActivelogin(...props) {
  return (
    <Router>
        <NavbarLogin/>
        <Switch>
          <Route path="/login" exact><Login login={props[0].login}/></Route>
          <Route path="/register" exact><Register login={props[0].login}></Register></Route>
          <Redirect to="/login"></Redirect>
        </Switch>
      </Router>
  )
}

function App() {
  const [login,setlogin] = useState(false);
  const [userid,setuserid] = useState('as');

  const logind = (user) => {
    setlogin(prev => {
      return true;
    })
    setuserid(prev => {
      return user;
    });
    // console.log(userid);
  }

  if(login)
  {
    return (
      <div className="app">
          <Activelogin/>
      </div>
    );
  }
  else {
    return (
      <div className="app">
          <NotActivelogin login={logind} />
      </div>
    );
  }
  
}

export default App;
