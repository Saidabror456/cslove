import Icon from './Icon'

export default function AmxMod() {
  const commands = [
    { cmd: 'amx_kick <#userid|name>', desc: 'O\'yinchini serverdan chiqarish' },
    { cmd: 'amx_ban <#userid|name> <time|0> [reason]', desc: 'O\'yinchini ban qilish' },
    { cmd: 'amx_slay <#userid|name>', desc: 'O\'yinchini o\'ldirish' },
    { cmd: 'amx_slap <#userid|name> [damage]', desc: 'O\'yinchini urish (zararsiz)' },
    { cmd: 'amx_teamban <#userid|name> <time|0> [reason]', desc: 'O\'yinchini ma\'lum jamoadan chiqarish' },
    { cmd: 'amx_mute <#userid|name> <time|0>', desc: 'O\'yinchiga mikrofonni yopish' },
    { cmd: 'amx_gag <#userid|name> <time|0>', desc: 'O\'yinchiga chatni yopish' },
    { cmd: 'amx_silentban <#userid|name> <time|0>', desc: 'Ogohlantirmasdan ban qilish (faqat afzallik)' },
    { cmd: 'amx_votemap', desc: 'Xaritalar bo\'yicha ovoz berish' },
    { cmd: 'amx_map <mapname>', desc: 'Xaritani o\'zgartirish' },
    { cmd: 'amx_lock / amx_unlock', desc: 'Serverni band/bo\'sh qilish' },
    { cmd: 'amx_who <#userid|name>', desc: 'O\'yinchining ID va ma\'lumotlari' },
    { cmd: 'amx_last', desc: 'Oxirgi kick/banlar tarixi' },
    { cmd: 'amx_immunity', desc: 'Admin immunitetini ko\'rish' },
  ]

  const mapRules = [
    'Xaritani faqat raund tugagandan keyin almashtirish mumkin.',
    'Xarita 15+ raund o\'tgan bo\'lsa, chatga +++ yozib, o\'yinchilarga so\'rash.',
    'Kopchilik rozi bo\'lsa, xaritani almashtirish mumkin.',
    'Hech qanday sababsiz xarita almashtirish mumkin emas.',
  ]

  return (
    <div className="page amxmod-page">
      <h1 className="page-title">
        <span className="title-icon"><Icon name="gamepad" size={30} /></span>
        AmxMod Menu qoidalari
      </h1>
      <p className="page-desc">AmxMod X pluginidan to'g'ri foydalanish va buyruqlar ro'yxati.</p>

      <div className="warning-banner">
        <span className="warning-icon"><Icon name="alert" size={20} /></span>
        <div>
          <strong>MUHIM:</strong> Admin menyudan faqat zarurat bo'lganda foydalaning. O'z harakatingizni o'ylab harakat qiling — har bir buyruq o'yinjarayoniga ta'sir qiladi.
        </div>
      </div>

      <div className="admin-section">
          <h2 className="section-title">
            <span className="section-icon"><Icon name="map" size={20} /></span>
            Xarita almashtirish qoidalari
          </h2>
        <div className="rules-list">
          {mapRules.map((rule, i) => (
            <div key={i} className="rule-item">
              <span className="rule-num">{String(i + 1).padStart(2, '0')}</span>
              <p>{rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-section">
          <h2 className="section-title">
            <span className="section-icon"><Icon name="keyboard" size={20} /></span>
            Asosiy buyruqlar
          </h2>
        <div className="commands-grid">
          {commands.map((cmd, i) => (
            <div key={i} className="command-card">
              <code className="command-code">{cmd.cmd}</code>
              <p className="command-desc">{cmd.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
