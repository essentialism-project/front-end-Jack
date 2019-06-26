import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions'

class Signup4 extends React.Component {

  render() {
    return (
      <div>
          <button>{this.props.currentUser.personalvalues[0].personalvalue}</button>
          <button>{this.props.currentUser.personalvalues[1].personalvalue}</button>
          <button>{this.props.currentUser.personalvalues[2].personalvalue}</button>
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