import Icon from './Icon'

export default function Nicknames() {
  const examples = [
    { bad: 'Mador aksasi', bad2: 'Mador dada', reason: 'Ota-onamni kamsitish', action: 'Avval ogohlantirish, keyin nick o\'zgartirish, rad qilsa 10 daqiqa ban' },
    { bad: 'Putin', bad2: 'Zelenskiy', reason: 'Siyosiy provokatsiya', action: 'OGohlantirish, keyin nick o\'zgartirish, rad qilsa 30 daqiqa ban' },
    { bad: 'Nigga', bad2: 'Chinazilla', reason: 'Irqchilik va kamsitish', action: 'OGohlantirish, keyin nick o\'zgartirish, rad qilsa 1 soat ban' },
    { bad: 'Erotica_love', bad2: 'Sex_boy', reason: 'Moy', action: 'OGohlantirish, keyin nick o\'zgartirish, rad qilsa 10 daqiqa ban' },
    { bad: 'Admin_me_pls', bad2: 'I_need_admin', reason: 'Provokatsiya va aldash', action: 'Chatga tushuntirish, ogohlantirish' },
    { bad: 'XXX_bomba', bad2: 'Uchirib_yuboraman', reason: 'Tahdid', action: 'OGohlantirish, keyin ogohlantirish, rad qilsa 1 soat ban' },
  ]

  return (
    <div className="page nicknames-page">
      <h1 className="page-title">
        <span className="title-icon"><Icon name="users" size={30} /></span>
        Niklar bo'yicha qoidalar
      </h1>
      <p className="page-desc">Provokatsion, haqoratli va noqonuniy niklar bilan kurashish tartibi.</p>

      <div className="warning-banner">
        <span className="warning-icon"><Icon name="alert" size={20} /></span>
        <div>
          <strong>ESLATMA:</strong> O'zingizni boshqa shaxs sifatida ko'rsatish yoki mashhur shaxslarning ismini noto'g'ri ishlatish — provokatsiya hisoblanadi va jazo beriladi.
        </div>
      </div>

      <div className="admin-section">
          <h2 className="section-title">
            <span className="section-icon"><Icon name="slash" size={20} /></span>
            Jarayon tartibi
          </h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h3>Ogohlantirish</h3>
              <p>Aggressiyasiz, chiroyli tarzda ogohlantirish berish. Nickning qanday provokatsion ekanligini tushuntirish.</p>
            </div>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h3>Nick o'zgartirish</h3>
              <p>O'yinchidan nickni o'zgartirishni so'rash. Agar o'zgartirishni xohlasa, 5 daqiqa berish.</p>
            </div>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h3>Jazo</h3>
              <p>Agar o'zgartirmasa — amalga oshiriladi. Ogohi bo'lgandan keyin yoki TK/Chat spam bilan birga bo'lsa — ogohlantirishsiz ham ban qilinishi mumkin.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-section">
          <h2 className="section-title">
            <span className="section-icon"><Icon name="book" size={20} /></span>
            Misollar
          </h2>
        <div className="rules-table">
          {examples.map((ex, i) => (
              <div key={i} className="rule-row nick-example">
                <div className="nick-col">
                  <span className="nick-label"><Icon name="xCircle" size={14} /></span>
                  <code className="nick-code bad">{ex.bad}</code>
                </div>
                <div className="nick-arrow">→</div>
                <div className="nick-col">
                  <span className="nick-label"><Icon name="key" size={14} /></span>
                  <code className="nick-code">{ex.bad2}</code>
                </div>
              </div>
          ))}
        </div>
      </div>

      <div className="admin-section">
          <h2 className="section-title">
            <span className="section-icon"><Icon name="check" size={20} /></span>
            Tavsiyalar
          </h2>
        <div className="rules-table">
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Hamma o'yinchiga bir xil talablar qo'ying — istisno yo'q.</span>
            </div>
          </div>
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Admin o'zi ham provokatsion nik ishlatmasligi kerak.</span>
            </div>
          </div>
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Agar kimdir provokatordan keyin chiroyli o'ynasa — unga rahmat aytish kerak.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
