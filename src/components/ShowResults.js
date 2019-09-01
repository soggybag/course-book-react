import React from 'react'
import { connect } from 'react-redux'

import ShowPairs from './ShowPairs'

import './ShowResults.css'

function ShowResults(props) {
  return (
    <div className="ShowResults">
      <h2>Results</h2>
      <p>{props.currentStudent}</p>
      <ShowPairs pairs={props.studentPairs} />
    </div>
  )
} 

const mapStateToProps = (state) => {
  const { selectedCourse, courses } = state.courseBook
  console.log(selectedCourse)

  if (selectedCourse === '') {
    return { currentStudent: '' }
  }

  const course = courses[selectedCourse]
  const { currentStudent, studentPairs } = course

  return {
    currentStudent, 
    studentPairs
  }
}

export default connect(mapStateToProps)(ShowResults)