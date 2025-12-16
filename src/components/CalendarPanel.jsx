import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Calendar.css'

function CalendarPanel() {
  const today = new Date()
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  )

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7

  const nationalHolidays = [17, 20]

  const days = []

  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) days.push(d)

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  return (
    <div className="calendar">
      <div className="calendar-top-nav">
        <button onClick={prevMonth} className="nav-btn">
          <ChevronLeft size={18} />
        </button>

        <span className="calendar-datetime">
          {today.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
          {', '}
          {today.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>

        <button onClick={nextMonth} className="nav-btn">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="calendar-grid">
        {days.map((day, idx) => {
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()

          const isHoliday = nationalHolidays.includes(day)

          return (
            <span
              key={idx}
              className={[
                'calendar-day',
                isToday && 'today',
                isHoliday && 'holiday'
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {day || ''}
            </span>
          )
        })}
      </div>

      <div className="calendar-legend">
        <div className="legend-item">
          <span className="legend-dot today-dot" />
          <span>Current day</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot holiday-dot" />
          <span>National Holiday</span>
        </div>
      </div>
    </div>
  )
}

export default CalendarPanel
