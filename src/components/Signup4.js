import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions'

class Signup4 extends React.Component {

  render() {
    return (
      <div>
          <button>{this.props.currentUser.personalvalues.personalvalue1}</button>
          <button>{this.props.currentUser.personalvalues.personalvalue2}</button>
          <button>{this.props.currentUser.personalvalues.personalvalue3}</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
});

export default connect(
  mapStateToProps,
  { updateUser }
)(Signup4);