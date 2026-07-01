import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const PHOTOS = [
  ['/images/ambulance_interior.webp', 'Interiér ambulancie', 'tall'],
  ['/images/priestor_2.webp', 'Priestor ambulancie', ''],
  ['/images/priestor_3.webp', 'Priestor ambulancie', ''],
  ['/images/location_photo.webp', 'Naša ambulancia', 'tall'],
  ['/images/priestor_5.JPEG', 'Priestor ambulancie', ''],
  ['/images/priestor_4.webp', 'Priestor ambulancie', ''],
]

export default function Gallery() {
  return (
    <section id="priestor" className="section gallery">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Prostredie</p>
          <h2 className="h2">Náš <em>priestor</em></h2>
          <p className="gallery__lead">
            Zútulňujú ho deň čo deň naše sestričky.
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
