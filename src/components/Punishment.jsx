import Icon from './Icon'

export default function Punishment() {
  const punishments = [
    { type: 'Mute', duration: '5-10 minutes', reason: 'Player swore', color: '#f59e0b' },
    { type: 'Ban', duration: '10-30 minutes', reason: 'Repeated swearing after mute', color: '#f97316' },
    { type: 'Ban', duration: '1 hour', reason: 'Insulting minors or harsh swearing', color: '#ef4444' },
    { type: 'Ban', duration: '30 minutes', reason: 'TK (Team Kill) — at round start', color: '#f97316' },
    { type: 'Ban', duration: '7 days', reason: 'Cheating (Aimbot, Wallhack, Bhop, etc.)', color: '#dc2626' },
    { type: 'Ban', duration: 'Permanent', reason: 'Cheating + 2 previous bans', color: '#991b1b' },
    { type: 'Kick', duration: '', reason: 'AFK 5+ min / Advertising / Scam', color: '#6b7280' },
  ]

  return (
    <div className="page punishment-page">
      <h1 className="page-title">
        <span className="title-icon"><Icon name="balance" size={30} /></span>
        Jazolash tizimi
      </h1>
      <p className="page-desc">Har bir qoidabuzarlik uchun mos javobgarlik va jazo me\'yorlari.</p>

      <div className="warning-banner">
        <span className="warning-icon"><Icon name="alert" size={20} /></span>
        <div>
          <strong>ESLATMA:</strong> Har bir admin o'ziga yuklatilgan jazolarni to'g'ri qo'llashi shart. Adolatli bo'ling va har doim ogohlantirishdan boshlang.
        </div>
      </div>

      <div className=" punish-table-wrap">
        <table className="punish-table">
          <thead>
            <tr>
              <th>Jazo turi</th>
              <th>Davomiyligi</th>
              <th>Sabab</th>
            </tr>
          </thead>
          <tbody>
            {punishments.map((p, i) => (
              <tr key={i}>
                <td>
                  <span className="punish-badge" style={{ background: p.color + '20', color: p.color, borderColor: p.color }}>
                    {p.type}
                  </span>
                </td>
                <td className="duration-cell">{p.duration || '—'}</td>
                <td>{p.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-section">
          <h2 className="section-title">
            <span className="section-icon"><Icon name="book" size={20} /></span>
            Jadval tushuntirish
          </h2>
        <div className="rules-table">
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Kichik xatolarni avval ogohlantirish bilan hal qiling.</span>
            </div>
            <div className="rule-dont">
              <span className="dont-badge">❌</span>
              <span>Kichkina xato uchun darhol qattiq jazo bermang.</span>
            </div>
          </div>
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Cheating uchun halal yo'q — 7 kun ban, pro consolesiz.</span>
            </div>
            <div className="rule-dont">
              <span className="dont-badge">❌</span>
              <span>Cheatingni kechirib yuboring — server obro'si ketadi.</span>
            </div>
          </div>
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Har bir jazoni server.log fayliga yozing.</span>
            </div>
            <div className="rule-dont">
              <span className="dont-badge">❌</span>
              <span>Log yozmaslik — javobgarlikni qiyinlashtiradi.</span>
            </div>
          </div>
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Shubha holatlarda boshqa adminlarni kengashing.</span>
            </div>
            <div className="rule-dont">
              <span className="dont-badge">❌</span>
              <span>Yolg'iz hukm chiqarish va xato qilish.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
