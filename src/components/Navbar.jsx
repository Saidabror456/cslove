import './Navbar.css'

import Icon from './Icon'

export default function Navbar({ activeSection, onNavigate }) {
  const sections = [
    { id: 'home', label: 'Bosh sahifa', icon: 'home' },
    { id: 'rules', label: 'Qoidalar', icon: 'rules' },
    { id: 'admin', label: 'Admin qoidalari', icon: 'shield' },
    { id: 'punishment', label: 'Jazolash', icon: 'balance' },
    { id: 'nicknames', label: 'Niklar', icon: 'users' },
    { id: 'amxmodmenu', label: 'AmxMod', icon: 'gamepad' },
    { id: 'contact', label: 'Aloqa', icon: 'mail' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-icon"><Icon name="zap" size={26} /></span>
          <span className="brand-text">CSLOVE.UZ</span>
        </div>
        <ul className="nav-list">
          {sections.map(section => (
            <li key={section.id}>
              <button
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => onNavigate(section.id)}
              >
              <Icon name={section.icon} size={16} className="nav-icon" />
              <span className="nav-label">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
