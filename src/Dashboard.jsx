
import { useState } from 'react'

function Dashboard() {
  const [steps, setSteps] = useState(7500)

  return (
    <div className="page">
      <h1>MY FITNESS DASHBOARD</h1>
      <p>Welcome! Track your daily fitness progress.</p>

      <div className="fitness-card">
        <h2>Daily Steps</h2>
        <h1>{steps}</h1>
        <button onClick={() => setSteps(steps + 100)}>
          Add 100 Steps
        </button>
        <button onClick={() => setSteps(0)}>Reset</button>
      </div>

      <div className="fitness-card">
        <h2>Calories Burned</h2>
        <h1>350 kcal</h1>
      </div>

      <div className="fitness-card">
        <h2>Workout Time</h2>
        <h1>45 Minutes</h1>
      </div>
    </div>
  )
}

export default Dashboard
