import React from 'react'
import { connect } from 'react-redux'
import { pickStudent, pairStudents } from '../actions'

import './PickStudent.css'

function PickStudent(props) {
  return (
    <div className="PickStudent">
      <button
        onClick={() => {
          props.pickStudent()
        }}
      >Pick Student</button>

      <button
        onClick={() => {
          props.pairStudents()
        }}
      >Pair Student</button>
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