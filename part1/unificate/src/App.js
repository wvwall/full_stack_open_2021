import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [point, setPoint]= useState(0)

const goodVote = () => {
  setGood(good + 1)
  setAll(all + 1)
  setPoint(point + 1)
} 

const neutralVote = () => {
  setNeutral(neutral + 1)
  setAll(all + 1)
  setPoint(point + 0)
}

const baddVote = () => {
  setBad(bad + 1)
  setAll(all + 1)
  setPoint(point + -1)
}

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={goodVote}>good</button>
      <button onClick={neutralVote}>neutral</button>
      <button onClick={baddVote}>bad</button>

      <h2>Statistics</h2>
      {all === 0 && <h3>no feedback given</h3> 
      || <> 
          <h3>good:{good}</h3>
          <h3>neutral:{neutral}</h3>
          <h3>bad:{bad}</h3>
          <h3>all: {all} </h3>
          <h3>average: {average} </h3>
          <h3>point: {point / all} </h3>
        </>}
     
    </div>
  )
}

export default App