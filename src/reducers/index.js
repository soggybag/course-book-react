import { combineReducers } from 'redux'
import courseBookReducer from './course-book-reducer'

const reducers = combineReducers({
  courseBook: courseBookReducer
})

export default reducers