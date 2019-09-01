import React from 'react'
import { connect } from 'react-redux'
import AddCourse from './AddCourse'
import ListCourses from './ListCourses'

import './ShowCourses.css'

function ShowCourses(props) {
  return (
    <div className="column-content">
      <h2>Courses</h2>
      <p>Course:{props.courseCount}</p>
      <AddCourse />
      <ListCourses />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { courses } = state.courseBook
  const keys = Object.keys(courses)
  return {
    courses: keys
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(ShowCourses)