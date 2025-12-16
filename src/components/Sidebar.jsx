import './Sidebar.css'
import {
  Home,
  Calendar,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  X
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/5227c776b66bc83398ae99df32875ded0253f0f1.png'

function Sidebar({ isOpen, onClose }) {
    const navigate = useNavigate()

  const handleLogout = () => {
    onClose?.()
    navigate('/')
  }
  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <img src={logo} alt="logo" className="sidebar-logo-img" />

        <nav className="sidebar-nav">
          <div className="nav-item active">
            <Home size={20} />
            <span className="nav-label">Home</span>
          </div>

          <div className="nav-item">
            <Calendar size={20} />
            <span className="nav-label">Calendar</span>
          </div>

          <div className="nav-item">
            <Users size={20} />
            <span className="nav-label">Users</span>
          </div>

          <div className="nav-item">
            <MessageSquare size={20} />
            <span className="nav-label">Chats</span>
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="nav-item">
            <Settings size={20} />
            <span className="nav-label">Settings</span>
          </div>

                   <div className="nav-item" onClick={handleLogout}>
            <LogOut size={20} />
            <span className="nav-label">Logout</span>
          </div>

        </div>

        <button className="sidebar-close" onClick={onClose}>
          <X size={20} />
        </button>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  )
}

export default Sidebar
