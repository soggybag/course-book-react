export const ADD_COURSE = 'ADD_COURSE'
export const SELECT_COURSE = 'SELECT_COURSE'
export const ADD_STUDENT = 'ADD_STUDENT'
export const SELECT_STUDENT = 'SELECT_STUDENT'
export const PICK_STUDENT = 'PICK_STUDENT'
export const REMOVE_COURSE = 'REMOVE_COURSE'
export const PAIR_STUDENTS = 'PAIR_STUDENTS'

export const addCourse = (courseName) => {
  return {
    type: ADD_COURSE, 
    payload: courseName
  }
}

export const selectCourse = (courseId) => {
  return {
    type: SELECT_COURSE,
    payload: courseId
  }
} 

export const addStudent = (studentName) => {
  return {
    type: ADD_STUDENT,
    payload: studentName
  }
}

export const pickStudent = () => {
  return {
    type: PICK_STUDENT
  }
}

export const removeCourse = (index) => {
  return {
    type: REMOVE_COURSE,
    payload: index
  }
}

export const pairStudents = () => {
  return {
    type: PAIR_STUDENTS
  }
}


