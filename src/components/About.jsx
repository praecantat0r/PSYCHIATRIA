import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="o-nas" className="section about">
      <div className="container about__grid">

        <Reveal className="about__photos">
          <div className="about__photo-main">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80"
              alt="Útulný interiér ambulancie"
            />
          </div>
          <div className="about__photo-float">
            <img
              src="https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=600&q=80"
              alt="Detail pokojného interiéru"
            />
          </div>
          <motion.div
            className="about__badge"
            initial={{ scale: 0, rotate: -12 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.4 }}
          >
            <span className="about__badge-year">2013</span>
            <span className="about__badge-sub">Banská Bystrica</span>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">O ambulancii</p>
            <h2 className="h2">
              Odborná starostlivosť<br /><em>s ľudskou tvárou</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="about__text">
              Centrum u Velických pôsobí v Banskej Bystrici od roku 2013. Venujeme sa
              psychiatrickej diagnostike, liečbe a psychoterapii dospelých – s dôrazom
              na diskrétnosť, pokoj a individuálny prístup ku každému človeku.
            </p>
            <p className="about__text">
              Veríme, že prostredie lieči. Preto je u nás viac tepla než chrómu
              a viac času než zhonu.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="about__insurers">
              <span>Zmluvné poisťovne</span>
              <strong>VšZP</strong><strong>Dôvera</strong><strong>Union</strong>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
