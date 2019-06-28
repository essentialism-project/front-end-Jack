import React from 'react';
import { connect } from 'react-redux';
import { updateUser, submitProjects } from '../actions'

class Signup5 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        personal1: '',
        personal2: '',
        personal3: '',
        personal4: '',
        personal5: '',
        personal6: '',
        personal7: '',
        home1: '',
        home2: '',
        home3: '',
        home4: '',
        home5: '',
        home6: '',
        home7: '',
        work1: '',
        work2: '',
        work3: '',
        work4: '',
        work5: '',
        work6: '',
        work7: '',
        hobbies1: '',
        hobbies2: '',
        hobbies3: '',
        hobbies4: '',
        hobbies5: '',
        hobbies6: '',
        hobbies7: '',
    };
  }

  submitProjects = event => {
    event.preventDefault();

    this.props.submitProjects([
    {projectname: this.state.personal1},
    {projectname: this.state.personal2},
    {projectname: this.state.personal3},
    {projectname: this.state.personal4},
    {projectname: this.state.personal5},
    {projectname: this.state.personal6},
    {projectname: this.state.personal7},
    {projectname: this.state.home1},
    {projectname: this.state.home2},
    {projectname: this.state.home3},
    {projectname: this.state.home4},
    {projectname: this.state.home5},
    {projectname: this.state.home6},
    {projectname: this.state.home7},
    {projectname: this.state.work1},
    {projectname: this.state.work2},
    {projectname: this.state.work3},
    {projectname: this.state.work4},
    {projectname: this.state.work5},
    {projectname: this.state.work6},
    {projectname: this.state.work7},
    {projectname: this.state.hobbies1},
    {projectname: this.state.hobbies2},
    {projectname: this.state.hobbies3},
    {projectname: this.state.hobbies4},
    {projectname: this.state.hobbies5},
    {projectname: this.state.hobbies6},
    {projectname: this.state.hobbies7},
    ]);
    this.props.history.push('/signup6')
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  render() {
    return (
      <div className = 'lightGrey'>
        <h3 className = 'marginHeader greyHeader '>Now we know a little about your values, tell us what is going on in your life.</h3>
        <span id = 'greySpan' className = 'greySpan greyHeader'>List out your current projects or things that you do regularly</span>
        <div className = 'inputContainer'>
            <div className = 'inputColumn2'>
              <h3 className = 'greyHeader underline'>Personal</h3>
              <div className = 'inputBoxes2'>
                <input name = 'personal1' onChange={this.handleInputChange} value = {this.state.personal1} className = 'projectInput'></input>
                <input name = 'personal2' onChange={this.handleInputChange} value = {this.state.personal2} className = 'projectInput'></input>
                <input name = 'personal3' onChange={this.handleInputChange} value = {this.state.personal3} className = 'projectInput'></input>
                <input name = 'personal4' onChange={this.handleInputChange} value = {this.state.personal4} className = 'projectInput'></input>
                <input name = 'personal5' onChange={this.handleInputChange} value = {this.state.personal5} className = 'projectInput'></input>
                <input name = 'personal6' onChange={this.handleInputChange} value = {this.state.personal6} className = 'projectInput'></input>
                <input name = 'personal7' onChange={this.handleInputChange} value = {this.state.personal7} className = 'projectInput'></input>
              </div>
            </div>
            <div className = 'inputColumn2'>
              <h3 className = 'greyHeader underline'>Home</h3>
              <div className = 'inputBoxes2'>
                <input name = 'home1' onChange={this.handleInputChange} value = {this.state.home1} className = 'projectInput'></input>
                <input name = 'home2' onChange={this.handleInputChange} value = {this.state.home2} className = 'projectInput'></input>
                <input name = 'home3' onChange={this.handleInputChange} value = {this.state.home3} className = 'projectInput'></input>
                <input name = 'home4' onChange={this.handleInputChange} value = {this.state.home4} className = 'projectInput'></input>
                <input name = 'home5' onChange={this.handleInputChange} value = {this.state.home5} className = 'projectInput'></input>
                <input name = 'home6' onChange={this.handleInputChange} value = {this.state.home6} className = 'projectInput'></input>
                <input name = 'home7' onChange={this.handleInputChange} value = {this.state.home7} className = 'projectInput'></input>
              </div>
            </div>
            <div className = 'inputColumn2'>
              <h3 className = 'greyHeader underline'>Work</h3>
              <div className = 'inputBoxes2'>
                <input name = 'work1' onChange={this.handleInputChange} value = {this.state.work1} className = 'projectInput'></input>
                <input name = 'work2' onChange={this.handleInputChange} value = {this.state.work2} className = 'projectInput'></input>
                <input name = 'work3' onChange={this.handleInputChange} value = {this.state.work3} className = 'projectInput'></input>
                <input name = 'work4' onChange={this.handleInputChange} value = {this.state.work4} className = 'projectInput'></input>
                <input name = 'work5' onChange={this.handleInputChange} value = {this.state.work5} className = 'projectInput'></input>
                <input name = 'work6' onChange={this.handleInputChange} value = {this.state.work6} className = 'projectInput'></input>
                <input name = 'work7' onChange={this.handleInputChange} value = {this.state.work7} className = 'projectInput'></input>
              </div>
            </div>
            <div className = 'inputColumn2'>

              <h3 className = 'greyHeader underline'>Hobbies</h3>
              <div className = 'inputBoxes2'>
                <input name = 'hobbies1' onChange={this.handleInputChange} value = {this.state.hobbies1} className = 'projectInput'></input>
                <input name = 'hobbies2' onChange={this.handleInputChange} value = {this.state.hobbies2} className = 'projectInput'></input>
                <input name = 'hobbies3' onChange={this.handleInputChange} value = {this.state.hobbies3} className = 'projectInput'></input>
                <input name = 'hobbies4' onChange={this.handleInputChange} value = {this.state.hobbies4} className = 'projectInput'></input>
                <input name = 'hobbies5' onChange={this.handleInputChange} value = {this.state.hobbies5} className = 'projectInput'></input>
                <input name = 'hobbies6' onChange={this.handleInputChange} value = {this.state.hobbies6} className = 'projectInput'></input>
                <input name = 'hobbies7' onChange={this.handleInputChange} value = {this.state.hobbies7} className = 'projectInput'></input>
              </div>
            </div>
        </div>
        <div className = 'signUpNav'>
          <button>back</button>
          <button onClick = {this.submitProjects}>next</button>
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
  { updateUser, submitProjects }
)(Signup5);