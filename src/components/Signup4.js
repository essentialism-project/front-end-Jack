import React from 'react';
import { connect } from 'react-redux';
import { updateUser, submitText } from '../actions'

class Signup4 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text2: '',
      text3: ''
    };
  }

  submitText = event => {
    event.preventDefault();

    this.props.submitText([
    this.state.text1,
    this.state.text2,
    this.state.text3,
    ]);

    console.log(this.props.currentUser.userid)
    this.props.updateUser({...this.props.currentUser,personalvalues: [{...this.props.currentUser.personalvalues[0],description:this.state.text1},{...this.props.currentUser.personalvalues[1],description:this.state.text2},{...this.props.currentUser.personalvalues[2],description:this.state.text3}]}
    ,
    {personalvalues: [{...this.props.currentUser.personalvalues[0],description:this.state.text1},{...this.props.currentUser.personalvalues[1],description:this.state.text2},{...this.props.currentUser.personalvalues[2],description:this.state.text3}]})
    this.props.history.push('/signup5')
    
    
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className = 'lightGrey'>
        <h1 className = 'greyHeader'>In a few sentences, describe why the selected values are important to you.</h1>
        <h2 className = 'darkGreyHeader'>Focus on your thoughts/feelings, and don’t worry about spelling, grammar, or how well-written it is.</h2>
        <div className = 'inputContainer'>
            <div className = 'inputColumn'>
              <button className = 'valueButton selected' >{this.props.currentUser.personalvalues[0].personalvalue}</button>
              <div className = 'inputBox'><textarea name = 'text1' onChange={this.handleInputChange} value = {this.state.text1} className = 'input'></textarea></div>
            </div>
            <div className = 'inputColumn'>
              <button className = 'valueButton selected' >{this.props.currentUser.personalvalues[1].personalvalue}</button>
              <div className = 'inputBox'><textarea name = 'text2' onChange={this.handleInputChange} value = {this.state.text2} className = 'input'></textarea></div>
            </div>
            <div className = 'inputColumn'>

              <button className = 'valueButton selected' >{this.props.currentUser.personalvalues[2].personalvalue}</button>
              <div className = 'inputBox'><textarea name = 'text3' onChange={this.handleInputChange} value = {this.state.text3} className = 'input'></textarea></div>
            </div>
        </div>
        <div className = 'signUpNav'>
          <button>back</button>
          <button onClick = {this.submitText}>next</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
});

export default connect(
  mapStateToProps,
  { updateUser, submitText }
)(Signup4);