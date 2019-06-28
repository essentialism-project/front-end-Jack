import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import UpdateSelf from './components/UpdateSelf';
import Login from './components/Login';
import Signup1 from './components/Signup1';
import Signup2 from './components/Signup2';
import Signup3 from './components/Signup3';
import Signup4 from './components/Signup4';
import Signup5 from './components/Signup5';
import Signup6 from './components/Signup6';
import PrivateRoute from './components/PrivateRoute';
import './App.css'



function App() {
  // localStorage.clear()
  return (
    <Router>
      <div className="App">
        <div className = 'navContainer'>
          <span>Essentialism</span>
          <nav>
            
              <NavLink className = 'navLink' to="/login">Login</NavLink>
            
            
              <NavLink className = 'navLink' to="/signup1">Sign Up</NavLink>
            
            
              <NavLink className = 'navLink' to="/protected">Home Page</NavLink>
            
            
              <NavLink className = 'navLink' to="/signup3">Update Your Profile</NavLink>
            
          </nav>
        </div>
        <Route path="/login" component={Login} />
        <Route exact path="/signup1" component={Signup1} />
        <Route exact path="/signup2" component={Signup2} />
        <Route exact path="/signup3" component={Signup3} />
        <Route exact path="/signup4" component={Signup4} />
        <Route exact path="/signup5" component={Signup5} />
        <Route exact path="/signup6" component={Signup6} />
        <PrivateRoute exact path="/protected" component={HomePage} />
        <PrivateRoute exact path="/protected/update" component={UpdateSelf} />
      </div>
    </Router>
  );
}

export default App;