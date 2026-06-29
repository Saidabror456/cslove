import { useState, useMemo } from 'react'
import Icon from './Icon'
import './AdminRules.css'

const SECTIONS = [
    {
      title: 'Umumiy tamoyillar',
      icon: 'target',
    rules: [
      { do: 'Admin sifatida har doim o\'yinchi bilan hurmatli munosabatda bo\'ling.', dont: 'Adovat yoki shaxsiy manfaat bilan harakat qilmang.' },
      { do: 'O\'yinchilarga yordam berishga tayyor bo\'ling.', dont: 'O\'yinchilarni kamsitmang va kamsitmang.' },
      { do: 'Qoidalarni qat\'iy rioya qiling va bunday talab qiling.', dont: 'Qoidalarni o\'zingizga qarab talqin qilmang.' },
      { do: 'Agar xato qilsangiz, uzr so\'rang va tuzating.', dont: 'Xato qilganingizni tan olmang yoki himoya qiling.' },
    ]
  },
    {
      title: 'Buyruqlarni qo\'llash',
      icon: 'gamepad',
    rules: [
      { do: 'Buyruqlarni faqat zarurat bo\'lganda qo\'llang.', dont: 'Buyruqlarni o\'zingiz xohlagancha ishlatmang.' },
      { do: 'Kick/ban qilishdan oldin ogohlantirish berishni unutmang.', dont: 'Darhol kick/ban qilishga shoshiling.' },
      { do: 'Slay, slap, burn va boshqa funksiyalarni faqat TK yoki cheating tufayli qo\'llang.', dont: 'O\'yin o\'ynash uchun bu funksiyalarni ishlatmang.' },
      { do: 'Move va teleportni faqat chekka volontyorlarga qo\'llang.', dont: 'O\'yin jarayonini buzish uchun teleport qilmang.' },
    ]
  },
    {
      title: 'Ban va Mut',
      icon: 'hammer',
    rules: [
      { do: 'Cheating uchun 7 kun ban — pro consolesiz, izohsiz.', dont: 'Cheatingni kechirib yuboring undan keyin kim o\'ynaydi?' },
      { do: 'TK uchun ogohlantirish, keyin 30 daqiqa ban.', dont: 'TK uchun darhol 7 kun ban bermang.' },
      { do: 'Kichkina bolalarga nisbatan ogohlantiring, avval ogohlantiring.', dont: 'Kichkina bolaga ogohlantirishsiz darhol ban bering.' },
      { do: 'Barcha ban sababini serverni server.log fayliga yozing.', dont: 'Sababini yozmaslik yoki noaniq yozing.' },
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
      <p className="page-desc">CSLOVE.UZ adminlari uchun majburiy qoidalar va amaliyotlar.</p>

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
          <strong>MUHIM:</strong> Adminlik sizga imtiyoz bermaydi. Admin har doim qoidalarga bo'ysunishi va o'yinchilar bilan hurmatli munosabatda bo'lishi shart.
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
          <strong>DIQQAT:</strong> Agar siz qoidalarni buzgan bo'lsangiz, adminlikdan ozod qilinasiz va pullaringiz qaytarilmaydi.
        </div>
      </div>
    </div>
  )
}
