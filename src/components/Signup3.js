import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateUser, submitValues } from '../actions'
  
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

class Signup3 extends React.Component {
  
  state = {
    selectedValues: [],
    selectedButtons: [],
  }

  selectValue = (e) => {
    e.preventDefault();
    if(this.state.selectedValues.length > 2) {
      console.log(this.state.selectedValues[0])
      
      const node = ReactDOM.findDOMNode(this);

      // Get child nodes
      if (node instanceof HTMLElement) {
         console.log(this.state.selectedButtons[0])
         const child = node.querySelector(`.${this.state.selectedButtons[0]}`)
         console.log(child);
         child.classList.toggle('selected')
      }

      let reducedValues = this.state.selectedValues.shift();
      let reducedClasses = this.state.selectedButtons.shift();

      this.setState({
        selectedValues: reducedValues,
        selectedButtons: reducedClasses
      })
    }
    
    e.target.classList.toggle('selected')
    console.log(this.state.selectedButtons)
    console.log(e.target.className.substring(0,8))
    console.log(e.target.textContent)
    this.setState({
      selectedValues: [...this.state.selectedValues, e.target.textContent],
      selectedButtons: [...this.state.selectedButtons, e.target.className.substring(0,8)]
    })
  }

  submitValues = (e) => {
    e.preventDefault();
    this.props.submitValues(this.state.selectedValues)
    this.props.history.push('/signup4');

    console.log('submitValues called')
  }
  

  render() {
      console.log(this.props.currentUser)
    return (
      <body className = 'lightGrey'>
        <h1 className = 'white'>What is Important to You?</h1>
        <h2 className = 'white'>Select the Three Values that are The most Important to You</h2>
        <div className = 'valueContainer'>
          <div className = 'valueColumn'>{defaultValues1.map((value,i) => <button onClick = {this.selectValue} key = {(i*1).toString()} className = {'button'+(i*1).toString() + '   valueButton'} >{value}</button>)}</div>
          <div className = 'valueColumn'>{defaultValues2.map((value,i) => <button onClick = {this.selectValue} key = {(i+5).toString()} className = {'button'+(i+5).toString() + '   valueButton'} >{value}</button>)}</div>
          <div className = 'valueColumn'>{defaultValues3.map((value,i) => <button onClick = {this.selectValue} key = {(i+10).toString()} className = {'button'+(i+10).toString() + '   valueButton'} >{value}</button>)}</div>
        </div>
        <div className = 'signUpNav'>
          <button>back</button>
          <button onClick = {this.submitValues}>next</button>
        </div>
      </body>
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
  { updateUser, submitValues }
)(Signup3);