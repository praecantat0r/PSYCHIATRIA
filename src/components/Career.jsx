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


      </div>
    </section>
  )
}
