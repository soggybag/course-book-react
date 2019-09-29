import React from 'react'
import { connect } from 'react-redux'
import { selectCourse, removeCourse } from '../actions'

import './ListCourses.css'

function ListCourses(props) {
  const courses = props.courses.map((course, i) => {
    return (
      <div 
        key={`${course}-${i}`}
        className="group-list-item"
      >
        <button
          className={"select-list " + (props.selectedCourse === course ? "selected-color" : "")}
          onClick={() => {
            props.selectCourse(course)
          }}
        >
          {course}
        </button>
        <button
          className="add-remove danger-color"
          onClick={() => {
            props.removeCourse(course)
          }}
        >&#x2212;</button>
      </div>
    )
  })
  return (
    <div className="ListCourses">
      {courses}
    </div>
  )
}

const mapStateToProps = ({courseBook}) => {
  const courses = Object.keys(courseBook.courses);
  const selectedCourse = courseBook.selectedCourse;
  return {
    courses,
    selectedCourse
  }
}

const mapDispatchToProps = () => {
  return {
    selectCourse,
    removeCourse
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(ListCourses)
