import React from 'react'
import { connect } from 'react-redux'

import './ShowResults.css'

function ShowResults(props) {
  return (
    <div className="ShowResults">
      <h2>Results</h2>
      <p>{props.currentStudent}</p>
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
  const { currentStudent } = course

  return {
    currentStudent
  }
}

export default connect(mapStateToProps)(ShowResults)