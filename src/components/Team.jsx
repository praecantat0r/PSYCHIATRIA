import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const TEAM = [
  {
    name: 'MUDr. Vladimír Velický',
    role: 'Psychiater',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'MUDr. Margaréta Velická',
    role: 'Psychiatrička',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Alena Sigetyová',
    role: 'Zdravotná sestra',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ruženka Tomečková',
    role: 'Zdravotná sestra',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
]

export default function Team() {
  return (
    <section id="tim" className="section team">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--light">Tím</p>
          <h2 className="h2">Tím, ktorému<br /><em>môžete dôverovať</em></h2>
        </Reveal>

        <div className="team__grid">
          {TEAM.map((m, i) => (
            <motion.div
              className="team__card"
              key={m.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="team__photo">
                <img src={m.img} alt={m.name} loading="lazy" />
              </div>
              <p className="team__name">{m.name}</p>
              <p className="team__role">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
