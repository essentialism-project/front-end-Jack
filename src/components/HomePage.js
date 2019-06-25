import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        HomePage Component Rendered Here
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(
  mapStateToProps,
  { }
)(HomePage);