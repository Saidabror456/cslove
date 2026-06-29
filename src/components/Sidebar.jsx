import { useEffect, useCallback, useState } from 'react'
import Icon from './Icon'
import './Sidebar.css'

const SECTIONS = [
  { id: 'home', label: 'Bosh sahifa', icon: 'home' },
  { id: 'rules', label: 'Qoidalar', icon: 'book' },
  { id: 'admin', label: 'Admin', icon: 'shield' },
  { id: 'punishment', label: 'Jazolash', icon: 'balance' },
  { id: 'nicknames', label: 'Niklar', icon: 'users' },
  { id: 'amxmodmenu', label: 'AmxMod', icon: 'gamepad' },
  { id: 'contact', label: 'Aloqa', icon: 'mail' },
]

export default function Sidebar({ activeSection, onNavigate, isOpen, onToggle }) {
  const [search, setSearch] = useState('')

  const handleNav = useCallback((id) => {
    onNavigate(id)
    if (window.innerWidth < 1024) onToggle()
  }, [onNavigate, onToggle])

  const filtered = SECTIONS.filter(s =>
    s.label.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '7') {
        e.preventDefault()
        handleNav(SECTIONS[parseInt(e.key) - 1].id)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleNav])

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onToggle} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand" onClick={() => handleNav('home')}>
            <span className="brand-icon"><Icon name="zap" size={24} /></span>
            <div className="brand-text">
              <span className="brand-name">CSLOVE</span>
              <span className="brand-sub">.UZ</span>
            </div>
          </div>
          <button className="sidebar-close" onClick={onToggle}><Icon name="xCircle" size={16} /></button>
        </div>

        <div className="sidebar-search">
          <div className="search-box">
            <Icon name="search" size={14} />
            <input
              type="text"
              placeholder="Bo'lim izlash..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-label">// NAVIGATION</div>
          <ul className="nav-list">
            {filtered.map(s => (
              <li key={s.id}>
                <button
                  className={`nav-item ${activeSection === s.id ? 'active' : ''}`}
                  onClick={() => handleNav(s.id)}
                >
                  <span className="nav-item-icon"><Icon name={s.icon} size={16} /></span>
                  <span className="nav-item-label">{s.label}</span>
                  {activeSection === s.id && <span className="nav-dot" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <a href="https://" target="_blank" rel="noopener noreferrer" className="server-btn">
            <Icon name="server" size={16} />
            <span>Serverga qo'shilish</span>
          </a>
          <div className="sidebar-hint">
            <kbd>Ctrl</kbd> + <kbd>1-7</kbd> — bo'lim
          </div>
        </div>
      </aside>
    </>
  )
}
