import './App.css';
import Navbar from './components/common/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Newentry from './components/Newentry';
import Viewentry from './components/Viewentry';
import Viewmenu from './components/Viewmenu';


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/create" component={Newentry}></Route>
          <Route path="/view" exact component={Viewmenu}></Route>
          <Route path="/view/:id" component={Viewentry}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
