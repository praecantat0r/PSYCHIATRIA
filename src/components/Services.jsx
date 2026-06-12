import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const SERVICES = [
  'Psychiatrické vyšetrenie',
  'Liečba úzkosti a depresie',
  'Poruchy spánku',
  'Individuálna psychoterapia',
  'Krízová intervencia',
  'Kontrolné vyšetrenia',
]

export default function Services() {
  return (
    <section id="sluzby" className="section services">
      <div className="container services__grid">

        <Reveal className="services__photo">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
            alt="Zelený, presvetlený priestor ambulancie"
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
