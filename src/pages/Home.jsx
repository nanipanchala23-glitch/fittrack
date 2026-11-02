import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="tagline">YOUR FITNESS. YOUR FUTURE.</p>
        <h1>TRANSFORM YOUR<br /><span>FITNESS JOURNEY</span></h1>
        <p>
          Track your daily activities, monitor your progress,
          and achieve your fitness goals with FitTrack Pro.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="main-button">Get Started</Link>
          <Link to="/login" className="outline-button">Login</Link>
        </div>
      </section>

      <section className="features">
        <h2>WHY CHOOSE FITTRACK PRO?</h2>

        <div className="card-container">
          <div className="feature-card">
            <h3>Activity Tracking</h3>
            <p>Monitor your daily steps and fitness activities.</p>
          </div>

          <div className="feature-card">
            <h3>Calorie Monitoring</h3>
            <p>Keep track of calories burned during workouts.</p>
          </div>

          <div className="feature-card">
            <h3>Progress Tracking</h3>
            <p>Stay motivated and work towards your fitness goals.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home