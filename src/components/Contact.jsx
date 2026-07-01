import { useState } from 'react'
import Reveal from './Reveal.jsx'

const reasons = [
  'Prihlásenie na liečbu',
  'Vybavovanie liekov',
  'Odhlásenie z termínu vyšetrenia',
]

const GMAIL_IOS_APP_STORE_URL = 'https://apps.apple.com/app/id422689480'
const GMAIL_ANDROID_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.google.android.gm'

// Opens a custom URL scheme and falls back to `fallbackUrl` if the app
// doesn't take over the page within `timeout` ms (iOS has no native
// equivalent of Android's `S.browser_fallback_url` intent extra).
function openAppWithFallback(appUrl, fallbackUrl, timeout = 1500) {
  let fellBack = false

  const onVisibilityChange = () => {
    if (document.hidden) {
      fellBack = true
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }
  document.addEventListener('visibilitychange', onVisibilityChange)

  window.location.href = appUrl

  setTimeout(() => {
    document.removeEventListener('visibilitychange', onVisibilityChange)
    if (!fellBack && !document.hidden) {
      window.location.href = fallbackUrl
    }
  }, timeout)
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', phone: '', email: '', message: '' })
  const [reason, setReason] = useState('')
  const [sent, setSent] = useState(false)

  const toggleReason = (val) => setReason((r) => (r === val ? '' : val))
  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Kontaktný formulár${reason ? ` – ${reason}` : ''} – ${fields.name}`
    )

    const body = encodeURIComponent(
      [
        `Meno: ${fields.name}`,
        `Telefón: ${fields.phone || '—'}`,
        `Email: ${fields.email}`,
        `Dôvod: ${reason || '—'}`,
        '',
        fields.message,
      ].join('\n')
    )

    const to = 'psychiatriavelicki@gmail.com'
    const webUrl = `https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${body}`
    const ua = navigator.userAgent
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream
    const isAndroid = /Android/.test(ua)

    if (isIOS) {
      const appUrl = `googlegmail:///co?to=${to}&subject=${subject}&body=${body}`
      openAppWithFallback(appUrl, GMAIL_IOS_APP_STORE_URL)
    } else if (isAndroid) {
      const appUrl = `intent://co?to=${to}&subject=${subject}&body=${body}#Intent;scheme=googlegmail;package=com.google.android.gm;S.browser_fallback_url=${encodeURIComponent(GMAIL_ANDROID_PLAY_STORE_URL)};end`
      window.location.href = appUrl
    } else {
      window.open(webUrl, '_blank', 'noopener,noreferrer')
    }
    setSent(true)
  }

  if (sent) {
    return (
      <section id="kontakt" className="section contact">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--lime">Kontakt</p>
            <h2 className="h2 h2--light">Napíšte <em>nám</em></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="contact__success">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <h3>Gmail otvorený</h3>
              <p>Správa je pripravená v Gmaile. Stačí ju odoslať.</p>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section id="kontakt" className="section contact">
      <div className="container">

        <Reveal>
          <p className="eyebrow eyebrow--accent">Kontakt</p>
          <h2 className="h2 h2--light">Napíšte <em>nám</em></h2>
          <p className="contact__intro">Napíšte nám prosím Vaše problémy, pre ktoré vyhľadávate našu starostlivosť.</p>
        </Reveal>

        <div className="contact__layout">
          <Reveal delay={0.1} className="contact__left">
            <a href="mailto:psychiatriavelicki@gmail.com" className="contact__email">
              psychiatriavelicki@gmail.com
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <p className="contact__address">Bernolákova 4138/14A, 974 05 Banská Bystrica</p>
          </Reveal>

          <Reveal delay={0.2} className="contact__right">
            <p className="contact__hours-label">Termíny</p>
            <p className="contact__hours-note">
              Objednávame na vopred určený termín po dohode s našimi sestričkami.
              Kontaktný formulár môžete využiť aj na vybavenie liekov alebo odhlásenie
              a preobjednanie termínu.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form className="contact__form" onSubmit={handleSubmit}>
            <p className="contact__hours-label" style={{ marginBottom: '1.8rem' }}>Alebo nám napíšte priamo tu</p>

            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="cf-name">Meno a priezvisko</label>
                <input id="cf-name" type="text" placeholder="Ján Novák" required value={fields.name} onChange={set('name')} />
              </div>
              <div className="contact__field">
                <label htmlFor="cf-phone">Telefónne číslo</label>
                <input id="cf-phone" type="tel" placeholder="+421 9XX XXX XXX" value={fields.phone} onChange={set('phone')} />
              </div>
            </div>

            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" placeholder="jan@email.sk" required value={fields.email} onChange={set('email')} />
              </div>
            </div>

            <div className="contact__field">
              <label>Dôvod kontaktu</label>
              <div className="contact__reasons">
                {reasons.map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={`contact__reason${reason === r ? ' is-active' : ''}`}
                    onClick={() => toggleReason(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="cf-message">Správa</label>
              <textarea id="cf-message" placeholder="Popíšte, s čím Vám môžeme pomôcť…" required value={fields.message} onChange={set('message')} />
            </div>

            <button type="submit" className="contact__submit">
              Odoslať správu
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <p className="contact__mailto-hint">
              Po kliknutí sa otvorí Gmail v novom okne s vyplnenou správou – stačí ju odoslať.
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.15} className="contact__map">
          <iframe
            src="https://www.google.com/maps?q=48.7196422,19.1336963&z=16&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Poloha ambulancie"
          />
        </Reveal>

      </div>
    </section>
  )
}
