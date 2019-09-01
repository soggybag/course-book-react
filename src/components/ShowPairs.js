import React from 'react'

function ShowPairs(props) {
  if (props.pairs === undefined) {
    return null
  }
  const pairs = props.pairs.map((pair, i) => {
    return (
      <div key={`pair-${i}`}>
        <p>
          <span>{pair[0]}</span>
          &#160; &#8213; &#160;
          <span>{pair[1]}</span>
        </p>
      </div>
    )
  })
  return (
    <div>
      <h2>Pairs</h2>
      {pairs}
    </div>
  )
}

export default ShowPairs