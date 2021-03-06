import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { signup2, addUser, getData, login } from '../actions';

class Signup2 extends React.Component {
  state = {
    credentials: {
      email: '',
      password: '',
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };


  //   signup2 = e => {
  //   e.preventDefault();
  //   this.props.addUser(this.props.newUserFirstName,this.props.newUserLastName,this.state.credentials.email,this.state.credentials.password).then(res => {
  //     if (res) {
  //       this.props.login(this.state.credentials.email,this.state.credentials.password);
  //       // this.props.history.push('/protected');
  //     }
  //   });
  // };

  signup2 = e => {
    e.preventDefault();
    this.props.addUser(this.props.newUserFirstName,this.props.newUserLastName,this.state.credentials.email,this.state.credentials.password)
    
    this.props.login(this.state.credentials.email,this.state.credentials.password)
    this.props.history.push('/login')


    console.log('newUserEmail: ', this.state.credentials.email)
    console.log('newUserPassword: ', this.state.credentials.password)
  };

  render() {
    return (
      <div className = 'darkGrey2'>
        <div className = 'loginBox'>
          <form onSubmit={this.signup2}>
            <input
              type="text"
              name="email"
              placeholder = 'Email'
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder = 'Password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button onCLick = {this.props.getData}>
              {this.props.addingUser ? (
                <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
              ) : (
                'Sign Up'
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn,
  newUserFirstName: state.newUserFirstName,
  newUserLastName: state.newUserLastName,
});

export default connect(
  mapStateToProps,
  { signup2, addUser, getData, login }
)(Signup2);