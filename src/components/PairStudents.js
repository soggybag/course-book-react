import React from 'react'
import { connect } from 'react-redux'
import { pairStudents } from '../actions'

function PairStudents(props) {
  return (
    <div className="PairStudents">
      <button
        onClick={() => {
        props.pairStudents()
        }}
      >PairStudents Student</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDipsatchToProps = () => {
  return {
    pairStudents
  }
}

export default connect(mapStateToProps, mapDipsatchToProps())(PairStudents)