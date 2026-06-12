import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const PHOTOS = [
  ['https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=900&q=80', 'Zeleň v každej miestnosti', 'tall'],
  ['https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80', 'Čakáreň', ''],
  ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80', 'Pracovňa', ''],
  ['https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80', 'Detaily, ktoré upokojujú', 'tall'],
  ['https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80', 'Svetlo a zeleň', ''],
  ['https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80', 'Interiér ambulancie', ''],
]

export default function Gallery() {
  return (
    <section id="priestor" className="section gallery">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Prostredie</p>
          <h2 className="h2">Náš <em>priestor</em></h2>
          <p className="gallery__lead">
            Prostredie, v ktorom sa rozpráva ľahšie. Zeleň, denné svetlo a ticho.
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
