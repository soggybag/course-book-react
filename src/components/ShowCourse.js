import React from 'react'
import { connect } from 'react-redux'
import AddStudent from './AddStudent'
import ListStudents from './ListStudents'
import PickStudent from './PickStudent'

import './ShowCourse.css'

function ShowCourse(props) {
  if (props.name === '') {
    return (
      <div className="ShowCourse">
        <h2>Select a course</h2>
      </div>  
    )
  }

  return (
    <div className="ShowCourse">
      <h2>{props.name}</h2>
      <p>students:{props.students.length}</p>
      <PickStudent />
      <AddStudent />
      <ListStudents />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { selectedCourse, courses } = state.courseBook
  if (selectedCourse === '') {
    return { name: '' }
  }

  const { name, students } = courses[selectedCourse]

  return {
    name,
    students
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(ShowCourse)