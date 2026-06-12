import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="kontakt" className="section contact">
      <div className="container">

        <Reveal>
          <p className="eyebrow eyebrow--lime">Kontakt</p>
          <h2 className="h2 h2--light">Napíšte <em>nám</em></h2>
        </Reveal>

        <div className="contact__layout">
          <Reveal delay={0.1} className="contact__left">
            <a href="mailto:info@centrumuvelickych.sk" className="contact__email">
              info@centrumuvelickych.sk
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <p className="contact__phone">+421 48 415 6038 · 0911 999 960</p>
            <p className="contact__address">Bernolákova 4138/14A, 974 05 Banská Bystrica</p>
          </Reveal>

          <Reveal delay={0.2} className="contact__right">
            <p className="contact__hours-label">Ordinačné hodiny</p>
            <table className="contact__hours">
              <tbody>
                <tr><td>Pondelok</td><td>7:30 – 12:00 &nbsp; 13:00 – 18:00</td></tr>
                <tr><td>Ut – Štvrtok</td><td>7:30 – 12:00 &nbsp; 13:00 – 16:00</td></tr>
                <tr><td>Piatok</td><td>7:30 – 12:00</td></tr>
                <tr className="is-closed"><td>So – Ne</td><td>zatvorené</td></tr>
              </tbody>
            </table>
          </Reveal>
        </div>

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
