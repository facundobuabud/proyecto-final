import { useState } from "react"

export default function Chat() {
  const [msg, setMsg] = useState("")
  const [messages, setMessages] = useState([])

  const handleChange = (event) => {
    setMsg(event.target.vale)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    setMessages([...messages, newMessage])

    setMsg("")
  }
  return (
    <div className="chat">
      <header className="chat-header">
        <div>
          <div className="chat-user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt="Aiden Chavez"
              className="chat-avatar"
            />
            <strong>Aiden Chavez</strong>
          </div>
          <span className="last-seen"> Last seen: 2 hours ago</span>
        </div>

        <div className="chat-actions">
          <button title="Camera">📷</button>
          <button title="Gallery">🖼️</button>
          <button title="Settings">⚙️</button>
          <button title="Help">❓</button>
        </div>
      </header>


      <section className="chat-messages">
        {
          messages.map((message) => <div className="message">
            <p>{message.text}</p>
            <span className="time">{message.time}</span>
          </div>)
        }
      </section>

      <footer className="chat-footer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter text here..."
            onChange={handleChange}
            value={msg}
          />
          <button>➤</button>
        </form>
      </footer>
    </div>
  )
}
