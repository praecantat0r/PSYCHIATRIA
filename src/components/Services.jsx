import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const SERVICES = [
  'Liečba úzkosti a depresie',
  'Poruchy spánku',
  'Psychoterapeutické zameranie pri kontrolách',
  'Krízová intervencia pri zhoršení psychického stavu pacientov',
  'Telefonické konzultácie so sestričkami',
]

export default function Services() {
  return (
    <section id="sluzby" className="section services">
      <div className="container services__grid">

        <Reveal className="services__photo">
          <img
            src="/images/comu_sa_venujeme.webp"
            alt="Čomu sa venujeme v ambulancii"
            loading="lazy"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Starostlivosť</p>
            <h2 className="h2">Čomu sa <em>venujeme</em></h2>
          </Reveal>

          <ul className="services__list">
            {SERVICES.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px 0px -5% 0px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="services__num">{String(i + 1).padStart(2, '0')}</span>
                {s}
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
