import Sidebar from '../components/Sidebar/Sidebar'
import TopBar from '../components/TopBar/TopBar'

function DashboardLayout({ children }) {
  return (
    <div className="home-layout">
      <Sidebar />
      <div className="home-main">
        <TopBar />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
