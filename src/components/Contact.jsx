import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Reveal from './Reveal.jsx'

const reasons = [
  'Prihlásenie na liečbu',
  'Vybavovanie liekov',
  'Odhlásenie z termínu vyšetrenia',
]

export default function Contact() {
  const [state, handleSubmit] = useForm('xqeogdak')
  const [reason, setReason] = useState('')

  const toggleReason = (val) => setReason((r) => (r === val ? '' : val))

  if (state.succeeded) {
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
              <h3>Správa odoslaná</h3>
              <p>Ďakujeme za Vašu správu. Ozveme sa Vám čo najskôr.</p>
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
                <input id="cf-name" type="text" name="name" placeholder="Ján Novák" required />
                <ValidationError field="name" errors={state.errors} className="contact__field-error" />
              </div>
              <div className="contact__field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" name="email" placeholder="jan@email.sk" required />
                <ValidationError field="email" errors={state.errors} className="contact__field-error" />
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
              {/* hidden input so Formspree receives the reason value */}
              <input type="hidden" name="reason" value={reason} />
            </div>

            <div className="contact__field">
              <label htmlFor="cf-message">Správa</label>
              <textarea id="cf-message" name="message" placeholder="Popíšte, s čím Vám môžeme pomôcť…" required />
              <ValidationError field="message" errors={state.errors} className="contact__field-error" />
            </div>

            <button type="submit" className="contact__submit" disabled={state.submitting}>
              {state.submitting ? 'Odosielam…' : 'Odoslať správu'}
              {!state.submitting && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              )}
            </button>
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
