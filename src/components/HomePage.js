import React from 'react';
import { connect } from 'react-redux';
import {getData} from '../actions'

class HomePage extends React.Component {

  render() {
    return (
      <div>
        HomePage Component Rendered Here
        <button onClick = {this.props.getData}>Get Data</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(
  mapStateToProps,
  { getData }
)(HomePage);