import React from 'react'
import { connect } from 'react-redux'
import { pickStudent, pairStudents } from '../actions'

import './PickStudent.css'

function PickStudent(props) {
  return (
    <div className="PickStudent">
      <button
        className="notice-color"
        onClick={() => {
          props.pickStudent()
        }}
      >Pick Student</button>

      <button
        className="notice-color"
        onClick={() => {
        props.pairStudents()
        }}
      >Pair Students</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDipsatchToProps = () => {
  return {
    pickStudent,
    pairStudents
  }
}

export default connect(mapStateToProps, mapDipsatchToProps())(PickStudent)