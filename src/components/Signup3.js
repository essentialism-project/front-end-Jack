import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions'

class Signup3 extends React.Component {
  
  
  
  render() {
      console.log(this.props.currentUser)
    return (
      <div>
        Arthur's Boxes here
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  updatingUser: state.updatingUser,
  currentUser: currentUser,
});

export default connect(
  mapStateToProps,
  { updateUser }
)(Signup3);