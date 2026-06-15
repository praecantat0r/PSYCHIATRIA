import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Quote() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section className="quote-section" ref={ref}>
      <motion.div className="quote-section__bg" style={{ y }}>
        <img src="/citat.jpg" alt="Lesná cesta so slnečnými lúčmi" loading="lazy" />
      </motion.div>
      <div className="quote-section__overlay" />
      <div className="container quote-section__content">
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="quote-section__mark">&ldquo;</span>
          Aj keď sa ocitneme v hmle, stačí hľadať len ďalší krok a cesta sa ukáže…
        </motion.blockquote>
      </div>
    </section>
  )
}
