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
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute';
import { getData} from './actions';
import { connect } from 'react-redux';
import './App.css'



class App extends React.Component {



  render() {
    return (
      <Router>
        <div className="App">
          <div className = 'navContainer'>
            <span>Essentialism</span>
            <nav>

                <NavLink onCLick = {() => this.props.getData()} className = 'navLink' to="/login">Login</NavLink>


                <NavLink onCLick = {() => this.props.getData()} className = 'navLink' to="/signup1">Sign Up</NavLink>


                <NavLink className = 'navLink' to="/protected/dashboard">Dashboard</NavLink>


                <NavLink className = 'navLink' to="/protected/signup3">Update Your Profile</NavLink>

            </nav>
          </div>
          <Route path="/login" component={Login} />
          <Route exact path="/signup1" component={Signup1} />
          <Route exact path="/signup2" component={Signup2} />
          <PrivateRoute exact path="/protected/signup3" component={Signup3} />
          <PrivateRoute exact path="/protected/signup4" component={Signup4} />
          <PrivateRoute exact path="/protected/signup5" component={Signup5} />
          <PrivateRoute exact path="/protected/signup6" component={Signup6} />
          <PrivateRoute exact path="/protected/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/protected" component={HomePage} />
          <PrivateRoute exact path="/protected/update" component={UpdateSelf} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(
mapStateToProps,
{ getData }
)(App);