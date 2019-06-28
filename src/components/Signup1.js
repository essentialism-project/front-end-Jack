import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { signup1 } from '../actions';

class Signup1 extends React.Component {
  state = {
    credentials: {
      firstName: '',
      lastName: '',
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

  signup1 = e => {
    e.preventDefault();
    this.props.signup1([this.state.credentials.firstName,this.state.credentials.lastName])
    // .then(res => {
    //   if (this.state.firstName) {
    //     this.props.history.push('/signup2');
    //   }
    // });
   this.props.history.push('/signup2') 
  };

  render() {
    return (
      <div className = 'darkGrey2'>
        <form onSubmit={this.signup1}>
          <input
            type="text"
            name="firstName"
            value={this.state.credentials.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.credentials.lastName}
            onChange={this.handleChange}
          />
          <button>
            {this.props.addingUser ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Continue'
            )}
          </button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { signup1 }
)(Signup1);