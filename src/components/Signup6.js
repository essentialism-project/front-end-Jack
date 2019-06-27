import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateUser, submitProjects, getData } from '../actions'
  
const defaultValues1 = [
  'Relationships with Family and Friends',
  'Independence',
  'Art and Literature',
  'Nature and Environment',
  'Membership in Social Group',
]

const defaultValues2 = [
  'Community',
  'Moral Principles',
  'Creativity, Discovery, and Inventing',
  'Kindness and Generosity',
  'Music',
]

const defaultValues3 = [
  'Career Success',
  'Living in the Moment',
  'Sense of Humor',
  'Athletic Ability',
  '+ Add your own Value',
]

class Signup6 extends React.Component {
  
  state = {
    selectedProjects: [],
    selectedButtons: [],
  }

  selectValue = (e) => {
    e.preventDefault();
    if(this.state.selectedProjects.length > 2) {
      console.log(this.state.selectedProjects[0])
      
      let reducedValues = this.state.selectedProjects.shift();

      this.setState({
        selectedProjects: reducedValues,
      })
    }
    
    e.target.classList.toggle('selected')
    console.log(this.state.selectedButtons)
    console.log(e.target.className.substring(0,8))
    console.log(e.target.textContent)
    this.setState({
      selectedProjects: [...this.state.selectedProjects, e.target.textContent],
      selectedButtons: [...this.state.selectedButtons, e.target.className.substring(0,8)]
    })
  }

  submitProjects = (e) => {
    e.preventDefault();
    this.props.submitProjects(this.state.selectedProjects)
    this.props.history.push('/signup4');
    // setTimeout(2000,this.props.updateUser(this.props.currentUser))

    console.log('submitProjects called')
  }
  

  render() {
      console.log(this.props.currentUser)
    return (
      <div className = 'lightGrey'>
        
        <div className = 'projectValues'>
            <div className = 'projects'>{this.props.currentUser.personalvalues[3].projects.map((project,i) => {if(project.projectname) {return <button onClick = {this.selectProject} key = {i} className = {'projectInput'} >{project.projectname}</button>}})}</div>
            <div className = 'valuesH'>
            <h3 className = 'white short'>Now let’s organize your project into your top three values. Which of your projects help you build your relationships with family and friends value?</h3>
                <div className = 'values'>
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
  error: state.error,
  updatingUser: state.updatingUser,
  currentUser: state.currentUser,
});

export default connect(
  mapStateToProps,
  { updateUser, getData, submitProjects }
)(Signup6);