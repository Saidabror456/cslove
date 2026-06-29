import Icon from './Icon'

export default function Rules() {
  return (  
    <div className="page rules-page">
      <h1 className="page-title">
        <span className="title-icon"><Icon name="book" size={30} /></span>
        Umumiy qoidalar
      </h1>

      <div className="rules-list">
        <div className="rule-item">
          <span className="rule-num">01</span>
          <div className="rule-content">
            <h3>Hurmatli munosabat</h3>
            <p>Barcha o'yinchilar bilan, ayniqsa yangi o'yinchilar bilan hurmatli va do'stona munosabatda bo'lish shart. Haddan tashqari qo'pol bo'lish mumkin emas.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">02</span>
          <div className="rule-content">
            <h3>Cheating va Exploits</h3>
            <p>Hujumchi dasturlar (cheat, aimbot, wallhack va h.k.) ishlatish qat'iyan man etiladi. Shubha ostida bo'lgan o'yinchilar serverdan chiqariladi va 7+ kun ban qilinadi.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">03</span>
          <div className="rule-content">
            <h3>Mic spam va Chat spam</h3>
            <p>Mikrofon orqali keraksiz ovoz yuborish, chatda spam yuborish va ortiqcha CAPS LOCK ishlatish tatbiq etilmaydi.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">04</span>
          <div className="rule-content">
            <h3>Team Killing (TK)</h3>
            <p>Do'stona o'yinda TK ruxsat etilgan. Raund boshida TK qilish qattiq jazolanadi. Raundning oxirida TK jazosi kamaytirilishi mumkin.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">05</span>
          <div className="rule-content">
            <h3>Round sabotaji</h3>
            <p>Raundni buzish, bomba/garovni qo'ymaslik, moddiyotlarni yashirish va raundni to'xtatish kabilarga yo'l qo'yilmaydi.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">06</span>
          <div className="rule-content">
            <h3>Skin va Model</h3>
            <p>Server standart skinlaridan foydalaning. Cheating uchun mo'ljallangan skinlar va modellar (buyum kattalashtirish va h.k.) man etiladi.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">07</span>
          <div className="rule-content">
            <h3>Account sharing</h3>
            <p>Go'zallik pullarini boshqa shaxsga berish, hisobni sotish yoki almashish man etiladi. O'zingizning Steam hisobingizni himoya qiling.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">08</span>
          <div className="rule-content">
            <h3>Reclama va Scam</h3>
            <p>Serverda reklama tarqatish, boshqa serverlarni targ'ib qilish, o'yinchilarni aldab pullariini olish va scam qilish qat'iyan man etiladi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
