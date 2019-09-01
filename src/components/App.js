import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../reducers'
import { loadState, saveState } from '../utils'
import ShowCourses from './ShowCourses'
import ShowCourse from './ShowCourse'
import Header from './Header'
import ShowResults from './ShowResults'

import './App.css';

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(() => {
  saveState(store.getState())
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="content">
          <ShowCourses />
          <ShowCourse />
          <ShowResults />
        </div>
      </div>
    </Provider>
  );
}

export default App;
