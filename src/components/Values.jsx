import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const VALUES = [
  {
    title: 'Úcta k človeku',
    text: 'Nevnímame pacienta cez diagnózu, ale cez príbeh, ktorý so sebou priniesol.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Rešpekt',
    text: 'Liečba vzniká vzájomnou dohodou. Váš názor a tempo sú pre nás rovnako dôležité ako odborné hľadisko.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1" /><path d="M15 4H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Zaangažovanosť',
    text: 'Vo vyhradenom čase sa pacientovi plne venujeme — bez zhonu, bez prerušení.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
]

export default function Values() {
  return (
    <section className="section values">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Náš prístup</p>
          <h2 className="h2">Hodnoty, na ktorých <em>nám záleží</em></h2>
        </Reveal>

        <div className="values__grid">
          {VALUES.map((v, i) => (
            <motion.div
              className="values__card"
              key={v.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={{ duration: 0.8, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <span className="values__icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
