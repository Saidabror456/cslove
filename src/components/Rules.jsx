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
            <h3>Hurmat</h3>
            <p>Barcha o'yinchilar bilan, ayniqsa yangi o'yinchilar bilan, hurmatli munosabatda bo'lish shart.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">02</span>
          <div className="rule-content">
            <h3>Cheats</h3>
            <p>Hujumchi dasturlar (cheat, aimbot, wallhack) ishlatish man etiladi. Shubha ostida bo'lganlarga 7+ kun ban.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">03</span>
          <div className="rule-content">
            <h3>Mic/Chat spam</h3>
            <p>Mikrofon orqali keraksiz ovoz yuborish, chatda spam yuborish va ortiqcha CAPS LOCK ishlatish tatbiq etilmaydi.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">04</span>
          <div className="rule-content">
            <h3>Team Kill (TK)</h3>
            <p>Raund boshida TK qilish qattiq jazolanadi. Raund oxirida TK qilish qabul qilinadi.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">05</span>
          <div className="rule-content">
            <h3>Raund buzish</h3>
            <p>Bomba/garovni qo'ymaslik, moddiyotlarni yashirish va raundni to'xtatish mumkin emas.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">06</span>
          <div className="rule-content">
            <h3>Skin/Model</h3>
            <p>Server standart skinlaridan foydalaning. Cheat uchun mo'ljallangan skinlar man etiladi.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">07</span>
          <div className="rule-content">
            <h3>Account sharing</h3>
            <p>Go'zallik pullariini boshqa shaxsga berish, hisobni sotish yoki almashish man etiladi.</p>
          </div>
        </div>
        <div className="rule-item">
          <span className="rule-num">08</span>
          <div className="rule-content">
            <h3>Reklama/Scam</h3>
            <p>Serverda reklama tarqatish, boshqa serverlarni targ'ib qilish, o'yinchilarni aldab pulini olish man etiladi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
