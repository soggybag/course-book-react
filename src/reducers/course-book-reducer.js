import { ADD_COURSE, SELECT_COURSE, ADD_STUDENT, PICK_STUDENT, REMOVE_COURSE, PAIR_STUDENTS } from '../actions'
import { random } from '../utils'

const defaultState = () => {
  return {
    courses: {}, 
    selectedCourse: ''
  }
}

const makeCourse = (name) => {
  return {
    name, 
    students: [],
    currentStudent: ''
  }
}

const courseBookReducer = (state = defaultState(), action) => {
  const { type, payload } = action
  const { courses, selectedCourse } = state

  if (type === ADD_COURSE) {
    // ADD Course 
    const newCourseName = payload.trim()
    if (courses[newCourseName] !== undefined) {
      return state
    }
    const newCourse = makeCourse(newCourseName)
    const coursesCopy = { ...courses }
    coursesCopy[newCourseName] = newCourse

    return { ...state, courses: coursesCopy }

  } else if (type === SELECT_COURSE) {
    // SELECT Course
    const newState = { ...state, selectedCourse: payload } 
    return newState

  } else if (type === ADD_STUDENT) {
    // ADD Student
    const studentName = payload.trim()
    const course = courses[selectedCourse]
    const { students } = course

    console.log(students)

    if (students.indexOf(studentName) !== -1) {
      return state
    }

    const newStudents = [ ...students, studentName ]
    const newState = { ...state }
    newState.courses[selectedCourse].students = newStudents

    return newState

  } else if (type === PICK_STUDENT) {
    // PICK Student
    const course = courses[selectedCourse]
    const { students } = course
    const student = students[random(students.length)]
    const newState = { ...state }
    newState.courses[selectedCourse].currentStudent = student

    return newState

  } else if (type === REMOVE_COURSE) {
    // REMOVE Course
    const newCourses = { ...courses }
    delete newCourses[payload]
    const newSelectedCourse = selectedCourse === payload ? '' : selectedCourse
    return { ...state, selectedCourse: newSelectedCourse, courses: newCourses }
  }

  switch(type) {

    default: 
      return state
  }
}

export default courseBookReducer