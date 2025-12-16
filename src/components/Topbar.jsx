import { Bell, Menu } from 'lucide-react'
import './Topbar.css'

function TopBar({ onMenuClick }) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <Menu size={20} />
        </button>

        <div className="topbar-text">
          <p className="topbar-greeting">Good morning!</p>
          <h2 className="topbar-name">Saurabh Sharma</h2>
        </div>
      </div>

      <div className="topbar-right">
        <button className="notification-btn">
          <Bell size={20} />
        </button>
      </div>
    </div>
  )
}

export default TopBar
