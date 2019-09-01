import React from 'react'
import { connect } from 'react-redux'
import { pickStudent } from '../actions'

import './PickStudent.css'

function PickStudent(props) {
  return (
    <div className="PickStudent">
      <button
        onClick={() => {
        props.pickStudent()
        }}
      >Pick Student</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDipsatchToProps = () => {
  return {
    pickStudent
  }
}

export default connect(mapStateToProps, mapDipsatchToProps())(PickStudent)