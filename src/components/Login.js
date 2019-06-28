import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login, getData } from '../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
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

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials.username,this.state.credentials.password).then(res => {
      if (res) {
        this.props.getData();
        this.props.history.push('/protected/signup3')
        }
    });
  };

  render() {
    return (
      <div className = 'darkGrey2'>
        <div className = 'loginBox'>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              placeholder = 'Email'
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder = 'Password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>
              {this.props.loggingIn ? (
                <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
              ) : (
                'Log in'
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
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { login, getData }
)(Login);