import Icon from './Icon'

export default function Punishment() {
  const punishments = [
    { type: 'Ochirma', duration: '5-10 dak', reason: "So'zish (3 tadan keyin)", color: '#f59e0b' },
    { type: 'Ochirma', duration: '10-30 dak', reason: "So'zishni davom ettirish", color: '#f97316' },
    { type: 'Ban', duration: '1 soat', reason: "Haqoratli so'zlar, bolaga nisbatan", color: '#ef4444' },
    { type: 'Ban', duration: '30 dak', reason: "O'z jamoasini o'ldirish (TK)", color: '#f97316' },
    { type: 'Ban', duration: '7 kun', reason: "Chit o'ynash: aybot, vollxak, bxop", color: '#dc2626' },
    { type: 'Doimiy ban', duration: 'Parmishment (por.)', reason: "Chit + avvalgi 2 ta bandan keyin", color: '#991b1b' },
    { type: 'Chiqarish', duration: '—', reason: 'AFK, reklama, scam', color: '#6b7280' },
  ]

  return (
    <div className="page punishment-page">
      <h1 className="page-title">
        <span className="title-icon"><Icon name="balance" size={30} /></span>
         Jazo me'yorlari
      </h1>
      <p className="page-desc">Nizombuziliklari uchun jazo me'yorlari</p>

      <div className="warning-banner">
        <span className="warning-icon"><Icon name="alert" size={20} /></span>
        <div>
          <strong>ESLATMA:</strong> Har bir admin jazoni qatiy tartibda bajaradi. Chit uchun hech qanday ogohlantirishsiz 7 kun ban, plus konsolsiz.
        </div>
      </div>

      <div className="punish-table-wrap">
        <table className="punish-table">
          <thead>
            <tr>
              <th>Jazo turi</th>
              <th>Muddati</th>
              <th>Sababi</th>
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
            Me'yorlar tushuntirishi
          </h2>
        <div className="rules-table">
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Kichik xatolarni avval ogohlantirish bilan hal qiling.</span>
            </div>
            <div className="rule-dont">
              <span className="dont-badge">❌</span>
              <span>Kichik hato uchun darhol qattiq jazo bermang.</span>
            </div>
          </div>
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Chit uchun halol yo'q — 7 kun ban, plus konsolsiz.</span>
            </div>
            <div className="rule-dont">
              <span className="dont-badge">❌</span>
              <span>Chitni kechirib yuboriladi — server obrusi ketadi.</span>
            </div>
          </div>
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Har bir jazo sababini server.log fayliga yozing.</span>
            </div>
            <div className="rule-dont">
              <span className="dont-badge">❌</span>
              <span>Log yozmaslik — javobgarlikni qiyinlashtiradi.</span>
            </div>
          </div>
          <div className="rule-row">
            <div className="rule-do">
              <span className="do-badge">✅</span>
              <span>Shubha holatlarda boshqa adminlar bilan maslahatlashing.</span>
            </div>
            <div className="rule-dont">
              <span className="dont-badge">❌</span>
              <span>Yolgiz hukm chiqarish va xatolik qilish.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
