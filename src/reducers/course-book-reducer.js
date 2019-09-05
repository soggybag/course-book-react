import { ADD_COURSE, SELECT_COURSE, ADD_STUDENT, PICK_STUDENT, REMOVE_COURSE, REMOVE_STUDENT, PAIR_STUDENTS } from '../actions'
import { random, randomArray } from 'really-random'

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
    studentPool: [],
    studentPairs: [],
    currentStudent: ''
  }
}

// TODO: Make list of all possible pairings
const makePairs = (arr) => {
  const pairs = []
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i; j < arr.length; j += 1) {
      pairs.push([arr[i], arr[j]])
    }
  }
  return pairs 
}

const courseBookReducer = (state = defaultState(), action) => {
  const { type, payload } = action
  const { courses, selectedCourse } = state
  const course = courses[selectedCourse]

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
    // * SELECT Course
    const newState = { ...state, selectedCourse: payload } 
    return newState

  } else if (type === ADD_STUDENT) {
    // ADD Student
    const studentName = payload.trim()
    const { students } = course
    
    // Avoid dudplicate name
    if (students.indexOf(studentName) !== -1) {
      return state
    }

    // Add new student
    const newStudents = [ ...students, studentName ]
    const newState = { ...state }
    newState.courses[selectedCourse].students = newStudents
   
    return newState

  } else if (type === PICK_STUDENT) {
    // * PICK Student
    const { students, studentPool } = course
    let newPool

    if (studentPool.length === 0) {
      // shuffle students and fill pool
      newPool = [ ...randomArray(students) ]
    } else {
      newPool = [ ...studentPool ]
    }

    // select random student and remove them from pool
    const student = newPool.splice(random(studentPool.length), 1)[0]
    const newState = { ...state }
    newState.courses[selectedCourse].currentStudent = student
    newState.courses[selectedCourse].studentPool = newPool

    return newState

  } else if (type === REMOVE_COURSE) {
    // * REMOVE Course
    const newCourses = { ...courses }
    delete newCourses[payload]
    const newSelectedCourse = selectedCourse === payload ? '' : selectedCourse
    return { ...state, selectedCourse: newSelectedCourse, courses: newCourses }

  } else if (type === REMOVE_STUDENT) {
    // * REMOVE Student
    const studentName = payload.trim()
    const { students, studentPool } = courses[selectedCourse]
    const newStudents = students.filter( student => student !== studentName)
    const newPool = studentPool.filter( student => student !== studentName)
    const newState = { ...state }
    newState.courses[selectedCourse].students = newStudents
    newState.courses[selectedCourse].studentPool = newPool

    return newState 

  } else if (type === PAIR_STUDENTS) {
    // * PAIR Students 
    const { students, studentPairs } = course
    
    // if (studentPairs.length === 0) {
    //   studentPairs = makePairs(randomArray(students))
    // }

    const randomStudents = randomArray(students)
    const newPairs = []
    while(randomStudents.length > 0) {
      const pair = randomStudents.splice(0, 1)
      if (randomStudents.length > 0) {
        pair.push(randomStudents.splice(0, 1)[0])
      }
      newPairs.push(pair)
    }

    const newCourse = { ...course, studentPairs: newPairs }
    const newState = { ...state }
    newState.courses[selectedCourse] = newCourse

    return newState

  } else {
    return state
  }
}

export default courseBookReducer