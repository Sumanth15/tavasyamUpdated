import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/Topbar'
import UpcomingSession from '../components/UpcomingSession'
import ScheduleList from '../components/ScheduleList'
import CalendarPanel from '../components/CalendarPanel'
import ChatsPanel from '../components/ChatsPanel'
import SummaryCards from '../components/SummaryCards'
import './HomeScreen.css'

export default function HomeScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="home-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="home-main">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <div className="home-content">
          <div className="home-left">
            <UpcomingSession />
            <ScheduleList />
            <SummaryCards />
          </div>

          <div className="home-right">
            <CalendarPanel />
            <ChatsPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
