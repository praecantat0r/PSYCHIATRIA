import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero({ animate }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const ease = [0.22, 1, 0.36, 1]
  const up = (delay) => ({
    initial: { opacity: 0, y: 40 },
    animate: animate ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.95, delay, ease },
  })

  return (
    <section id="hero" className="hero" ref={ref}>
      <motion.div className="hero__photo" style={{ y }}>
        <img
          src="/images/location_photo.jpeg"
          alt="Teplý, presvetlený interiér ambulancie"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
      <div className="hero__overlay" />

      <motion.div className="hero__content" style={{ opacity: fade }}>
        <div className="container">
          <motion.p className="hero__eyebrow" {...up(0.1)}>
            Psychiatrická a psychoterapeutická ambulancia · Banská Bystrica
          </motion.p>
          <motion.h1 className="hero__headline" {...up(0.25)}>
            Priestor<br />ku <em>stretnutiu</em>
          </motion.h1>
          <motion.p className="hero__tagline" {...up(0.45)}>
            O duševné zdravie dospelých sa staráme od roku 2013.
          </motion.p>
          <motion.div {...up(0.6)}>
            <a href="#kontakt" className="btn btn--accent hero__cta">
              Napísať email
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#o-nas"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : {}}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <span>scroll</span>
        <motion.span
          className="hero__scroll-line"
          animate={{ scaleY: [0, 1, 0], originY: ['0%', '0%', '100%'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  )
}
