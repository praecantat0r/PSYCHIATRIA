import Reveal from './Reveal.jsx'

export default function Career() {
  return (
    <section className="section career">
      <div className="container career__grid">

        <Reveal className="career__card career__card--notice">
          <p className="eyebrow eyebrow--dark">Aktuálne</p>
          <h3>Nových pacientov prijímame v obmedzenom počte</h3>
          <p>
            Naša ambulancia je kapacitne takmer obsadená. Nových dospelých pacientov
            prijímame vo veľmi obmedzenom počte. Pokiaľ máte záujem napriek
            obmedzeniam, kontaktujte nás cez formulár nižšie – popíšte svoje
            problémy, pre ktoré nás chcete vyhľadať, a ozveme sa Vám.
          </p>
        </Reveal>


      </div>
    </section>
  )
}
