import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const PHOTOS = [
  ['/images/ambulance_interior.jpeg', 'Interiér ambulancie', 'tall'],
  ['/images/starostlivost_s_respektom.jpeg', 'Starostlivosť s rešpektom', ''],
  ['/images/comu_sa_venujeme.jpeg', 'Čomu sa venujeme', ''],
  ['/images/location_photo.jpeg', 'Naša ambulancia', 'tall'],
  ['/images/margareta_vlado.jpeg', 'MUDr. Margaréta a Vladimír Velickí', ''],
  ['/images/alenka.jpeg', 'Alena Sigetyová', ''],
]

export default function Gallery() {
  return (
    <section id="priestor" className="section gallery">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Prostredie</p>
          <h2 className="h2">Náš <em>priestor</em></h2>
          <p className="gallery__lead">
            Útulňujú ho deň čo deň naše sestričky.
          </p>
        </Reveal>

        <div className="gallery__grid">
          {PHOTOS.map(([src, caption, mod], i) => (
            <motion.figure
              className={`gallery__cell ${mod ? `gallery__cell--${mod}` : ''}`}
              key={src}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -5% 0px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={src} alt={caption} loading="lazy" />
              <figcaption>{caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
