import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCourse } from '../actions'

import './AddCourse.css'

class AddCourse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:''
    }
  }

  addNewCourse() {
    this.props.addCourse(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return (
      <div className="AddCourse">
        <input
          type="text"
          placeholder="Add a course"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value })
          }}
        />
        <button
          className="add-remove"
          onClick={(e) => {
            this.addNewCourse()
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
    addCourse
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(AddCourse)