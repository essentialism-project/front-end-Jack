import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions'

class UpdateSelf extends React.Component {

  render() {
    return (
      <div>
        UpdateSelf Component Rendered Here
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  updatingUser: state.updatingUser,
});

export default connect(
  mapStateToProps,
  { updateUser }
)(UpdateSelf);