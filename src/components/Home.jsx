import Icon from './Icon'

export default function Home() {
  return (
    <div className="page home-page">
      <div className="hero-card">
        <div className="hero-badge">CSLOVE.UZ</div>
        <h1>Admin Yo'riqnoma</h1>
        <p className="hero-subtitle">Server qoidalari haqida hamma narsani o'rganing</p>
        <div className="hero-chips">
          <span className="chip">Counter-Strike 1.6</span>
          <span className="chip">AmxMod X</span>
        </div>
      </div>

      <div className="grid-2">
        <div className="info-card">
          <div className="card-icon"><Icon name="zap" size={32} /></div>
          <h3>Server haqida</h3>
          <p>Bu CS 1.6 serveri. Hamma o'yinchilar tartiblik o'ynashlari kerak.</p>
        </div>
        <div className="info-card">
          <div className="card-icon"><Icon name="shield" size={32} /></div>
          <h3>Admin nima qiladi?</h3>
          <p>Admin — bu tartibni saqlovchi. Ularning vazifasi: o'yinchilarga yordam berish, qoidalarni ta'minlash va ozroznli o'ynash.</p>
        </div>
        <div className="info-card">
          <div className="card-icon"><Icon name="book" size={32} /></div>
          <h3>Qoidalar</h3>
          <p>Hamma qoidalarga rioya qilish shart. Admin ham, o'yinchilar ham.</p>
        </div>
        <div className="info-card">
          <div className="card-icon"><Icon name="message" size={32} /></div>
          <h3>Yordam</h3>
          <p>Savollaringiz bo'lsa, adminlarga murojaat qiling. Ularning telegrami — @L1elbir</p>
        </div>
      </div>
    </div>
  )
}
