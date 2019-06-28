import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateUser, getData, deleteUser } from '../actions'

class Dashboard extends React.Component {

    updateValues = (e) => {
        this.props.history.push('/protected/signup3')
    }

    updateProjects = (e) => {
        this.props.updateUser({...this.props.currentUser,"personalvalues": [{...this.props.currentUser.personalvalues[0], projects: [], "personalvalue": this.props.currentUser.personalvalues[0].personalvalue },{...this.props.currentUser.personalvalues[1], projects: [], "personalvalue": this.props.currentUser.personalvalues[1].personalvalue },{...this.props.currentUser.personalvalues[2], projects: [], "personalvalue": this.props.currentUser.personalvalues[2].personalvalue }]},{"personalvalues": [{...this.props.currentUser.personalvalues[0], projects: [], "personalvalue": this.props.currentUser.personalvalues[0].personalvalue },{...this.props.currentUser.personalvalues[1], projects: [], "personalvalue": this.props.currentUser.personalvalues[1].personalvalue },{...this.props.currentUser.personalvalues[2], projects: [], "personalvalue": this.props.currentUser.personalvalues[2].personalvalue }]})
    this.props.history.push('/protected/signup5');
    }

    deleteUser = (e) => {
        this.props.deleteUser(this.props.currentUser.userid)
        this.props.history.push('/login')
    }

    render() {
        return(
        <div className = 'darkGrey'>
            <div className = 'values'>
                <div className = 'inputColumn'>
                    <button className = 'valueButton selected' >{this.props.currentUser.personalvalues[0].personalvalue}</button>
                    <div className = 'projectsDiv'>{this.props.currentUser.personalvalues[0].projects.map((project,i) => {return <button className = {'projectInput'}>{project.projectname}</button>} )}</div>
                    <button onClick = {this.updateValues} className = 'addSelectedButton' > Second thoughts about your value choices? Let's start from scratch. {this.props.currentUser.personalvalues[0].personalvalue}</button>
                </div>
                <div className = 'inputColumn'>
                    <button className = 'valueButton selected' >{this.props.currentUser.personalvalues[1].personalvalue}</button>
                    <div className = 'projectsDiv'>{this.props.currentUser.personalvalues[1].projects.map((project,i) => {return <button className = {'projectInput'}>{project.projectname}</button>} )}</div>
                    <button onClick = {this.updateProjects} className = 'addSelectedButton' > Projects come and go, click here to enter a new set of life activities.</button>
                </div>
                <div className = 'inputColumn'>
                    <button className = 'valueButton selected' >{this.props.currentUser.personalvalues[2].personalvalue}</button>
                    <div className = 'projectsDiv'>{this.props.currentUser.personalvalues[2].projects.map((project,i) => {return <button className = {'projectInput'}>{project.projectname}</button>} )}</div>
                    <button onClick = {this.deleteUser} className = 'addSelectedButton' > Delete Your Profile</button>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    updatingUser: state.updatingUser,
    currentUser: state.currentUser,
  });
  
  export default connect(
    mapStateToProps,
    { updateUser, getData, deleteUser }
  )(Dashboard);