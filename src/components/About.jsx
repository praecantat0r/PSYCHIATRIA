import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="o-nas" className="section about">
      <div className="container about__grid">

        <Reveal className="about__photos">
          <div className="about__photo-main">
            <img
              src="/images/margareta_vlado.jpeg"
              alt="MUDr. Margaréta Velická a MUDr. Vladimír Velický"
            />
          </div>
          <div className="about__photo-float">
            <img
              src="/images/location_photo.jpeg"
              alt="Ambulancia Centrum u Velických"
            />
          </div>
          <motion.div
            className="about__badge"
            initial={{ scale: 0, rotate: -12 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.4 }}
          >
            <span className="about__badge-year">1993</span>
            <span className="about__badge-sub">ambulancia</span>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">O ambulancii</p>
            <h2 className="h2">
              Starostlivosť s rešpektom<br /><em>ku jedinečnosti.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="about__text">
              Centrum u Velických pôsobí v Banskej Bystrici od roku 2013. Ako ambulancia
              fungujeme od roku 1993. Venujeme sa psychiatrickej diagnostike, liečbe
              a psychoterapii dospelých – s dôrazom na diskrétnosť, pokoj a individuálny
              prístup ku každému človeku.
            </p>
            <p className="about__text">
              Centrum u Velických pôsobí v Banskej Bystrici od roku 2013. Spája nás
              spoločný záväzok: byť tu pre vás bez predsudkov, s odbornosťou
              a s pochopením.
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
