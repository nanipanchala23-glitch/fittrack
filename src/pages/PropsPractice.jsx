
import { useState } from 'react'

// 1. Student Card
function StudentCard(props) {
  return (
    <div className="fitness-card">
      <h2>{props.name}</h2>
      <p>Roll Number: {props.roll}</p>
      <p>Marks: {props.marks}</p>
    </div>
  )
}

// 2. Reusable Button
function ReusableButton(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

// 3. Welcome Message
function WelcomeMessage(props) {
  return <h2>Welcome, {props.name}!</h2>
}

// 4. Product Card
function ProductCard(props) {
  return (
    <div className="fitness-card">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>Price: ₹{props.price}</h3>
    </div>
  )
}

// 5. Counter Display
function CounterDisplay(props) {
  return <h1>Counter Value: {props.count}</h1>
}

function CounterExample() {
  const [count, setCount] = useState(0)

  return (
    <div className="fitness-card">
      <h2>Parent Counter</h2>
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

// 6. Calculator Result Component
function CalculatorResult(props) {
  return <h2>Calculation Result: {props.result}</h2>
}

function CalculatorExample() {
  const [result, setResult] = useState(0)

  return (
    <div className="fitness-card">
      <h2>Calculator Result</h2>

      <button onClick={() => setResult(10 + 20)}>
        Add 10 + 20
      </button>

      <CalculatorResult result={result} />
    </div>
  )
}

// Main Props Practice Page
function PropsPractice() {
  return (
    <div className="page">
      <p className="tagline">REACT LAB PROGRAMS</p>
      <h1>PROPS PRACTICE</h1>

      <WelcomeMessage name="Yaswanth" />

      <div className="card-container">
        <StudentCard
          name="Rahul"
          roll="101"
          marks="90"
        />

        <StudentCard
          name="Priya"
          roll="102"
          marks="95"
        />

        <ProductCard
          name="Fitness Watch"
          price="1999"
          description="Track your daily fitness activities."
        />

        <ProductCard
          name="Sports Shoes"
          price="2499"
          description="Comfortable shoes for workouts."
        />

        <div className="fitness-card">
          <h2>Reusable Buttons</h2>
          <ReusableButton
            text="Red Button"
            color="#e63946"
            onClick={() => alert('Red Button Clicked')}
          />
          <ReusableButton
            text="Green Button"
            color="green"
            onClick={() => alert('Green Button Clicked')}
          />
        </div>

        <CounterExample />
        <CalculatorExample />
      </div>
    </div>
  )
}

export default PropsPractice
