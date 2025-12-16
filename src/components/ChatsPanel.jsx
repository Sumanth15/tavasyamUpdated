import { ChevronRight } from 'lucide-react'
import './Chats.css'

const chats = [
  {
    id: 1,
    name: 'Ayush Singh',
    message: 'Hi coach, workout done!',
    avatar: 'https://i.pravatar.cc/40?img=12'
  },
  {
    id: 2,
    name: 'Smriti Lal',
    message: 'Can we reschedule?',
    avatar: 'https://i.pravatar.cc/40?img=32'
  },
  {
    id: 3,
    name: 'Suraj Iyer',
    message: 'Diet plan received 👍',
    avatar: 'https://i.pravatar.cc/40?img=45'
  }
]

function ChatsPanel() {
  return (
    <div className="chats">
      <div className="chats-header">
        <h4>Chats</h4>
        <button className="chats-arrow">
  <ChevronRight size={18} />
</button>

      </div>

      <div className="chats-list">
        {chats.map(chat => (
          <div className="chat-item" key={chat.id}>
            <img src={chat.avatar} alt={chat.name} className="avatar" />

            <div className="chat-content">
              <div className="chat-top">
                <span className="chat-name">{chat.name}</span>
                <span className="chat-time">{chat.time}</span>
              </div>
              <p className="chat-message">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatsPanel
