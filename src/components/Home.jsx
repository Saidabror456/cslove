import Icon from './Icon'

export default function Home() {
  return (
    <div className="page home-page">
      <div className="hero-card">
        <div className="hero-badge">OFFICIAL</div>
        <h1>CSLOVE.UZ<br />Admin Yo'riqnoma</h1>
        <p className="hero-subtitle">Standart server qoidalari va admin yo'riqnomasi</p>
        <div className="hero-chips">
          <span className="chip">CS 1.6</span>
          <span className="chip">AmxMod X</span>
          <span className="chip">Anti-Cheat</span>
          <span className="chip">Public Server</span>
        </div>
      </div>

      <div className="grid-2">
        <div className="info-card">
          <div className="card-icon"><Icon name="zap" size={32} /></div>
          <h3>Server haqida</h3>
          <p>CSLOVE.UZ — Counter-Strike 1.6 serveri. Barcha o'yinchilar uchun ozoda va adolatli o'yin muhitini yaratish bizning asosiy maqsadimiz.</p>
        </div>
        <div className="info-card">
          <div className="card-icon"><Icon name="shield" size={32} /></div>
          <h3>Admin vazifasi</h3>
          <p>Admin — serverda tartibni saqlovchi, o'yinchilarga yordam beruvchi va adolatli bo'luvchi kishi. Har doim o'yinchilar bilan hurmatli munosabatda bo'lishi shart.</p>
        </div>
        <div className="info-card">
          <div className="card-icon"><Icon name="book" size={32} /></div>
          <h3>Qoidalar</h3>
          <p>Barcha adminlar va o'yinchilar CSLOVE.UZ qoidalariga rioya qilishlari shart. Qoidalar barcha uchun bir xil — istisno yo'q.</p>
        </div>
        <div className="info-card">
          <div className="card-icon"><Icon name="message" size={32} /></div>
          <h3>Yordam</h3>
          <p>Savollaringiz bo'lsa, adminlar bilan bog'laning. Biz sizga tushuntiramiz, o'rgatamiz va yordam beramiz.</p>
        </div>
      </div>
    </div>
  )
}
