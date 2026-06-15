import Reveal from './Reveal.jsx'

export default function Career() {
  return (
    <section className="section career">
      <div className="container career__grid">

        <Reveal className="career__card career__card--notice">
          <p className="eyebrow eyebrow--dark">Aktuálne</p>
          <h3>Momentálne nepreberáme nových pacientov</h3>
          <p>
            Nových pacientov sme schopní prijímať len na uvoľnené termíny po odhlásení
            z kontroly našich súčasných pacientov. Keďže sme kapacitne naplnení, vyžaduje
            to Vašu schopnosť prispôsobiť sa a flexibilitu pri objednávaní.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="career__card career__card--join">
          <p className="eyebrow eyebrow--accent">Do budúcna</p>
          <h3>Plánujeme rásť</h3>
          <p>
            Centrum by sa v budúcnosti rado rozšírilo o nových kolegov. Ak ste
            psychiater, psychológ alebo psychoterapeut a vedeli by ste si predstaviť
            pracovať v pokojnom prostredí s ľudským prístupom, napíšte nám.
          </p>
          <a href="#kontakt" className="btn btn--accent">
            Ozvať sa
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </Reveal>

      </div>
    </section>
  )
}
