import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateUser, submitProjects, getData, updateProjects0, updateProjects1, updateProjects2 } from '../actions'
  
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
  }

  

  selectProject = (e) => {
    e.preventDefault();
    


    e.target.classList.toggle('selectedProject')
    console.log(this.state.selectedProjects)
    console.log(e.target.className.substring(0,8))
    console.log(e.target.textContent)
    this.setState({
      selectedProjects: [...this.state.selectedProjects, e.target.textContent],
    })
   
        if(!(e.target.classList.contains('selectedProject'))) {
        this.setState({
            selectedProjects: this.state.selectedProjects.filter(x => x!=e.target.textContent)
        })
    }
  }



  submitProjects = (e) => {
    e.preventDefault();
    this.props.submitProjects(this.state.selectedProjects)

    // setTimeout(2000,this.props.updateUser(this.props.currentUser))

    console.log('submitProjects called')
  }

  updateProjects0 = (projects) => {
    this.props.updateProjects0(projects)

    console.log('submitProjects called')
  }

  updateProjects1 = (projects) => {
    this.props.updateProjects1(projects)

    console.log('submitProjects called')
  }

  updateProjects2 = (projects) => {
    this.props.updateProjects2(projects)

    console.log('submitProjects called')
  }
  
  sortProjects0 = (e) => {
    e.preventDefault();
      const node = ReactDOM.findDOMNode(this);
      // Get child nodes
      if (node instanceof HTMLElement) {
         const children = node.querySelectorAll(`.selectedProject`)
         console.log(children);
         children.forEach(child => child.classList.toggle('selectedProject'))
         children.forEach(child => child.classList.toggle('displayNone'))
      //    children.forEach(child => this.setState({selectedProjects: [...this.state.selectedProjects, e.target.textContent.substring(0,8)]}))
      // //    children.forEach(child => ))
      }

      let uniqueArray = [...new Set(this.state.selectedProjects)].map(item => {return {projectname: item}})
      this.updateProjects0(uniqueArray)
      this.setState({
        selectedProjects: []
    })
}

sortProjects1 = (e) => {
    e.preventDefault();
      const node = ReactDOM.findDOMNode(this);
      // Get child nodes
      if (node instanceof HTMLElement) {
         const children = node.querySelectorAll(`.selectedProject`)
         console.log(children);
         children.forEach(child => child.classList.toggle('selectedProject'))
         children.forEach(child => child.classList.toggle('displayNone'))
      //    children.forEach(child => this.setState({selectedProjects: [...this.state.selectedProjects, e.target.textContent.substring(0,8)]}))
      // //    children.forEach(child => ))
      }

      let uniqueArray = [...new Set(this.state.selectedProjects)].map(item => {return {projectname: item}})
      this.updateProjects1(uniqueArray)
      this.setState({
          selectedProjects: []
      })
}

sortProjects2 = (e) => {
    e.preventDefault(); 
      const node = ReactDOM.findDOMNode(this);
      // Get child nodes
      if (node instanceof HTMLElement) {
         const children = node.querySelectorAll(`.selectedProject`)
         console.log(children);
         children.forEach(child => child.classList.toggle('selectedProject'))
         children.forEach(child => child.classList.toggle('displayNone'))
      //    children.forEach(child => this.setState({selectedProjects: [...this.state.selectedProjects, e.target.textContent.substring(0,8)]}))
      // //    children.forEach(child => ))
      }
    
      let uniqueArray = [...new Set(this.state.selectedProjects)].map(item => {return {projectname: item}})
      this.updateProjects2(uniqueArray)
      this.setState({
        selectedProjects: []
    })
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
                        <div className = 'projectsDiv'>{this.props.currentUser.personalvalues[0].projects.map((project,i) => {return <button className = {'projectInput'}>{project.projectname}</button>} )}</div>
                        <button onClick = {this.sortProjects0} className = 'addSelectedButton' > Add Selected Projects to {this.props.currentUser.personalvalues[0].personalvalue}</button>
                    </div>
                    <div className = 'inputColumn'>
                        <button className = 'valueButton selected' >{this.props.currentUser.personalvalues[1].personalvalue}</button>
                        <div className = 'projectsDiv'>{this.props.currentUser.personalvalues[1].projects.map((project,i) => {return <button className = {'projectInput'}>{project.projectname}</button>} )}</div>
                        <button onClick = {this.sortProjects1} className = 'addSelectedButton' > Add Selected Projects to {this.props.currentUser.personalvalues[1].personalvalue}</button>
                    </div>
                    <div className = 'inputColumn'>
                        <button className = 'valueButton selected' >{this.props.currentUser.personalvalues[2].personalvalue}</button>
                        <div className = 'projectsDiv'>{this.props.currentUser.personalvalues[2].projects.map((project,i) => {return <button className = {'projectInput'}>{project.projectname}</button>} )}</div>
                        <button onClick = {this.sortProjects2} className = 'addSelectedButton' > Add Selected Projects to {this.props.currentUser.personalvalues[2].personalvalue}</button>
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
  { updateUser, getData, submitProjects, updateProjects0, updateProjects1, updateProjects2 }
)(Signup6);