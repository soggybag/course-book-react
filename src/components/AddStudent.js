import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../actions'

import './AddStudent.css'

class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:''
    }
  }

  addNewStudent() {
    this.props.addStudent(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return (
      <div className="AddStudent">
        <input
          type="text"
          placeholder="Add Student"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value })
          }}
        />
        <button
          className="add-remove notice-color"
          onClick={(e) => {
            this.addNewStudent()
          }}
        >&#x2b;</button>
      </div>
    )
  }
}

const mapStateToProps = ({ courseBook }) => {
  return {

  }
} 

const mapDispatchToProps = () => {
  return {
    addStudent
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(AddStudent)