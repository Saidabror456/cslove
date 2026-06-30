import Icon from './Icon'

export default function Contact() {
  return (
    <div className="page contact-page">
      <h1 className="page-title">
        <span className="title-icon"><Icon name="mail" size={30} /></span>
        Aloqa
      </h1>
      <p className="page-desc">Savollaringiz bo'lsa, bemalol yozing! Biz tushuntiramiz, o'rgatamiz, yordam beramiz.</p>

      <div className="contact-single">
        <div className="contact-card">
          <div className="contact-icon">💬</div>
          <h3>Telegram</h3>
          <p>Shaxsiy xabarlar va savollar uchun Telegram orqali bog'laning.</p>
          <a href="https://t.me/L1elbir" target="_blank" rel="noopener noreferrer" className="contact-btn">Telegramni oching</a>
        </div>
      </div>

      <div className="admin-section">
          <h2 className="section-title">
            <span className="section-icon"><Icon name="help" size={20} /></span>
            Ko'p beriladigan savollar
          </h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Savol: Admin bo'lish uchun nima qilish kerak?</h3>
            <p>Javob: Serverda faol o'ynang, qoidalarga rioya qiling, o'yinchilar bilan yaxshi munosabatda bo'ling. Adminni boshqalar tavsiya qilishi yoki boshqaruvchi e'tiboriga tushishingiz kerak.</p>
          </div>
          <div className="faq-item">
            <h3>Savol: Noto'g'ri jazolanganman, nima qilish kerak?</h3>
            <p>Javob: Adminga murojaat qiling, xatti-harakatlaringizni tushuntiring. Agar admin xato qilgan bo'lsa, boshqa adminlarga murojaat qiling.</p>
          </div>
          <div className="faq-item">
            <h3>Savol: Adminman, nima qilishim kerak?</h3>
            <p>Javob: O'yinchilarga yordam bering, tartibni saqlang, qoidalarni qat'iy rioya qiling. O'zingizni o'rnatingizni unutmang — admin — bu imtiyoz emas, mas'uliyat.</p>
          </div>
          <div className="faq-item">
            <h3>Savol: Donater admin nima imtiyozlarga ega?</h3>
            <p>Javob: Donater adminlar chiroyli imtiyozlarga ega, lekin ular ham qoidalarga bo'ysunadi va adolatli bo'lishlari shart. Qoidalarni buzgan taqdirda — jazo bilan bog'liq muammo bo'ladi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
