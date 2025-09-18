export default function Sidebar() {
  return (
    <div className="sidebar">
      <input type="text" placeholder="Search..." className="search" />
      <ul className="user-list">
        {[].map((u, i) => (
          <li key={i} className="user">
            <img src={u.avatar} alt={u.name} className="avatar" />
            <div className={`status ${u.status}`}></div>
            <div>
              <strong>{u.name}</strong>
              {u.lastSeen && <span className="last-seen"> - {u.lastSeen}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
