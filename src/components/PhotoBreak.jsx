import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PhotoBreak() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <div className="photobreak" ref={ref}>
      <motion.div className="photobreak__img" style={{ y }}>
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=80"
          alt="Slnko presvitajúce cez koruny stromov"
          loading="lazy"
        />
      </motion.div>
      <div className="photobreak__overlay" />
      <motion.blockquote
        className="photobreak__quote"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        „Pokoj nie je luxus.<br /><em>Je to základ.</em>“
      </motion.blockquote>
    </div>
  )
}
