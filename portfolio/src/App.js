import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import {Redirect, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <NavBar/>
        <div className='content'>
          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/experience'><Experience/></Route>
            <Route exact path='/project'><Projects/></Route>
            <Route exact path='fun'></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
