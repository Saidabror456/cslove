import { useState, useMemo } from 'react'
import Icon from './Icon'
import './AdminRules.css'

const SECTIONS = [
    {
      title: 'Umumiy tamoyillar',
      icon: 'target',
    rules: [
      { do: 'Admin sifatida huruqlab, adolatli munosabatda bo\'ling.', dont: 'Adovat qilmang yoki shaxsiy manfaat bilan harakat qilmang.' },
      { do: 'O\'yinchilarga yordam berishga tayyor bo\'ling.', dont: 'O\'yinchilarni kamsitmang.' },
      { do: 'Qoidalarni qat\'iy rioya qiling va ularning rioya qilishini talab qiling.', dont: 'Qoidalarni o\'zini xoxlaganingizdek talqin qilmang.' },
      { do: 'Xato qilsangiz — uzr so\'zlang va tuzating.', dont: 'Xato qilganingizni tan olmang yoki himoya qiling.' },
    ]
  },
    {
      title: 'Buyruqlarni qo\'llash',
      icon: 'gamepad',
    rules: [
      { do: 'Buyruqlarni faqat zarurat bo\'lganda qo\'llang.', dont: 'Buyruqlarni o\'zini istaganingizdek ishlatmang.' },
      { do: 'Kick/ban qilishdan oldin ogohlantirish berishni unutmang.', dont: 'Darhol kick/ban qilishga shoshiling.' },
      { do: 'Slay, slap, burn funksiyalarni faqat TK yoki cheating uchun qo\'llang.', dont: 'O\'yin o\'ynash uchun ulani ishlatmang.' },
      { do: 'Move va teleportni faqat chetjamoa volontyorlarga qo\'llang.', dont: 'O\'yin jarayonini buzish uchun teleport qilmang.' },
    ]
  },
    {
      title: 'Ban va Mute',
      icon: 'hammer',
    rules: [
      { do: 'Cheating uchun 7 kun ban — pro consolesiz, izohsiz.', dont: 'Cheatingni kechirib yuboring — kim o\'ynaydi?' },
      { do: 'TK uchun avval ogohlantirish, keyin 30 daqiqa ban.', dont: 'TK uchun darhol 7 kun ban bermang.' },
      { do: 'Kichkina bolalarga nisbatan dastlab ogohlantiring.', dont: 'Kichkina bolaga ogohlantirishsiz darhol ban bermang.' },
      { do: 'Barcha jazolar sababini server.log fayliga yozing.', dont: 'Sababini yozmang yoki noaniq yozing.' },
    ]
  },
]

export default function AdminRules() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return SECTIONS
    const q = search.toLowerCase()
    return SECTIONS.map(s => ({
      ...s,
      rules: s.rules.filter(r =>
        r.do.toLowerCase().includes(q) || r.dont.toLowerCase().includes(q)
      )
    })).filter(s => s.rules.length > 0)
  }, [search])

  return (
    <div className="page admin-rules-page">
      <h1 className="page-title">
        <span className="title-icon"><Icon name="shield" size={30} /></span>
        Admin qoidalari
      </h1>
      <p className="page-desc">Adminlar uchun majburiy qoidalar</p>

      <div className="search-bar">
        <span className="search-icon"><Icon name="search" size={18} /></span>
        <input
          type="text"
          placeholder="Qoidalarni izlash..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="warning-banner">
        <span className="warning-icon"><Icon name="alert" size={20} /></span>
        <div>
          <strong>MUHIM:</strong> Adminlik — bu mas'uliyat. Har doim qoidalarga bo'ysunib, o'yinchilar bilan hurmatli munosabatda bo'ling.
        </div>
      </div>

      {filtered.map((section, i) => (
        <div key={i} className="admin-section">
          <h2 className="section-title">
            <span className="section-icon">{section.icon}</span>
            {section.title}
          </h2>
          <div className="rules-table">
            {section.rules.map((rule, j) => (
              <div key={j} className="rule-row">
                <div className="rule-do">
                  <span className="do-badge"><Icon name="check" size={14} /></span>
                  <span>{rule.do}</span>
                </div>
                <div className="rule-dont">
                  <span className="dont-badge"><Icon name="xCircle" size={14} /></span>
                  <span>{rule.dont}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="warning-banner danger">
        <span className="warning-icon"><Icon name="slash" size={20} /></span>
        <div>
          <strong>DIQQAT:</strong> Qoidalarni buzsangiz — adminlikdan ozod qilinasiz va pullaringiz qaytarilmaydi.
        </div>
      </div>
    </div>
  )
}
