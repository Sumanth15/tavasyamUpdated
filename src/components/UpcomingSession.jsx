import { Clock } from 'lucide-react'
import './UpcomingSessions.css'


function UpcomingSession() {
  return (
    <div className="upcoming-session">
      <div className="upcoming-left">
        <img
          src="https://i.pravatar.cc/48?img=15"
          alt="trainee"
          className="avatar"
        />

        <div>
          <h4 className="upcoming-name">Rahul Roy</h4>
          <p className="muted">Single Transformation Plan</p>
        </div>
      </div>

      <div className="upcoming-middle">
        <div className="time-row">
          <Clock size={14} />
          <p className="upcoming-time" >7 AM - 8 AM</p>
        </div>
        <span className="upcoming-status">Starts in 20 mins</span>
      </div>
      <button className="join-btn">Join</button>
    </div>
  )
}

export default UpcomingSession
