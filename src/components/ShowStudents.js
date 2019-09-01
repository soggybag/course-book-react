import React from 'react'
import AddStudent from './AddStudent'
import ListStudents from './ListStudents'
import PickStudent from './PickStudent'

function ShowStudents() {
  return (
    <div>
      <h2>Students</h2>
      <PickStudent />
      <AddStudent />
      <ListStudents />
    </div>
  )
}

export default ShowStudents