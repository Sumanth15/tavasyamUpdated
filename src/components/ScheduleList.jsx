import { Calendar } from 'lucide-react'
import './Schedule.css'


const schedules = [
  {
    id: 1,
    name: 'Mayank Kumar Suryavanshi',
    plan: 'Single Transformation Plan',
    time: '8 AM - 9 AM',
    avatar: 'https://i.pravatar.cc/40?img=21'
  },
  {
    id: 2,
    name: 'Anand Patel',
    plan: 'Weight Loss Plan',
    time: '9 AM - 10 AM',
    avatar: 'https://i.pravatar.cc/40?img=22'
  },
  {
    id: 3,
    name: 'Aayushi Sharma',
    plan: 'Muscle Gain Plan',
    time: '10 AM - 11 AM',
    avatar: 'https://i.pravatar.cc/40?img=23'
  },
  {
    id: 4,
    name: 'Shubham Singh',
    plan: 'General Fitness',
    time: '12 PM - 1 PM',
    avatar: 'https://i.pravatar.cc/40?img=24'
  },
  {
    id: 5,
    name: 'Rahul Roy',
    plan: 'Single Transformation Plan',
    time: '1 PM - 2 PM',
    avatar: 'https://i.pravatar.cc/40?img=25'
  },
  {
    id: 6,
    name: 'Neha Verma',
    plan: 'Fat Loss Program',
    time: '2 PM - 3 PM',
    avatar: 'https://i.pravatar.cc/40?img=26'
  },
  {
    id: 7,
    name: 'Karan Mehta',
    plan: 'Strength Training',
    time: '3 PM - 4 PM',
    avatar: 'https://i.pravatar.cc/40?img=27'
  }
]



function ScheduleList() {
  return (
    <div className="schedule">
      <h3 className="section-title">Schedule</h3>

      <div className="schedule-list">
        {schedules.map(item => (
          <div className="schedule-card" key={item.id}>
            <div className="schedule-left">
              <img src={item.avatar} alt={item.name} className="avatar" />
              <div>
                <h4 className="schedule-name">{item.name}</h4>
                <p className="muted">{item.plan}</p>
              </div>
            </div>

            <div className="schedule-right">
              <span className="schedule-time">{item.time}</span>
              <button className="outline-btn">
                <Calendar size={12} />
                Reschedule
                </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleList
