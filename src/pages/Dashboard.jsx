import { useState } from 'react'

function FitnessCard(props) {
  return (
    <div className="fitness-card">
      <h2>{props.title}</h2>
      <h1>{props.value}</h1>
      <p>{props.description}</p>
    </div>
  )
}

function Dashboard() {
  const [steps, setSteps] = useState(7500)

  return (
    <div className="page dashboard">
      <p className="tagline">YOUR DAILY PROGRESS</p>
      <h1>MY FITNESS DASHBOARD</h1>
      <p>Welcome! Keep moving towards your fitness goals.</p>

      <div className="card-container">
        <FitnessCard
          title="Daily Steps"
          value={steps}
          description="Steps completed today"
        />

        <FitnessCard
          title="Calories Burned"
          value="350 kcal"
          description="Calories burned today"
        />

        <FitnessCard
          title="Workout Time"
          value="45 Min"
          description="Today's workout duration"
        />
      </div>

      <div className="counter-controls">
        <button onClick={() => setSteps(steps + 100)}>
          Add 100 Steps
        </button>

        <button className="reset-button" onClick={() => setSteps(0)}>
          Reset Steps
        </button>
      </div>
    </div>
  )
}

export default Dashboard