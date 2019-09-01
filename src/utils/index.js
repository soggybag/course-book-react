const COURSE_BOOK_STATE = "COURSE_BOOK_STATE"

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(COURSE_BOOK_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(COURSE_BOOK_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data")
  }
}

