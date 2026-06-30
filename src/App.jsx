import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Rules from './components/Rules'
import AdminRules from './components/AdminRules'
import Punishment from './components/Punishment'
import Nicknames from './components/Nicknames'
import AmxMod from './components/AmxMod'
import Contact from './components/Contact'
import backbg from './assets/backbg.jpg'
import overlayImg from './assets/backbg.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const getBgImage = () => {
    return `url(${backbg})`
  }

  const getBgClass = (section) => {
    switch (section) {
      case 'home': return 'bg-home'
      case 'rules': return 'bg-rules'
      case 'admin': return 'bg-admin'
      case 'punishment': return 'bg-punishment'
      case 'nicknames': return 'bg-nicknames'
      case 'amxmodmenu': return 'bg-amxmod'
      case 'contact': return 'bg-contact'
      default: return 'bg-home'
    }
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home />
      case 'rules': return <Rules />
      case 'admin': return <AdminRules />
      case 'punishment': return <Punishment />
      case 'nicknames': return <Nicknames />
      case 'amxmodmenu': return <AmxMod />
      case 'contact': return <Contact />
      default: return <Home />
    }
  }

  return (
    <div className="app">
      <div className="mobile-header">
        <button className={`hamburger ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
          <div className="hamburger-lines">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>
        <div className="mobile-brand">
          <span className="brand-icon">⚡</span>
          CSLOVE.UZ
        </div>
      </div>
      <Sidebar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
<main className="main-layout">
  <div 
    className={`main-content ${getBgClass(activeSection)}`}
    style={{ 
      '--overlay-image': `url(${overlayImg})`,
      backgroundImage: getBgImage(),
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    {renderSection()}
  </div>
        <footer className="footer">
          <p>© 2026 CSLOVE.UZ — Admin Guide. Barcha huquqlar himoyalangan.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
