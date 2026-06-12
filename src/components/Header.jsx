import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LINKS = [
  ['#o-nas', 'O nás'],
  ['#tim', 'Tím'],
  ['#priestor', 'Priestor'],
  ['#kontakt', 'Kontakt'],
]

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const tick = () => setSolid(window.scrollY > 60)
    tick()
    window.addEventListener('scroll', tick, { passive: true })
    return () => window.removeEventListener('scroll', tick)
  }, [])

  return (
    <header className={`header ${solid || open ? 'header--solid' : ''}`}>
      <div className="header__inner">
        <a href="#hero" className="header__brand" onClick={() => setOpen(false)}>
          <span className="header__badge">CV</span>
          <span className="header__brand-text">
            <span className="header__name">Centrum u Velických</span>
            <span className="header__tag">Psychiatria &amp; Psychoterapia</span>
          </span>
        </a>

        <nav className="header__nav">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="header__link">{label}</a>
          ))}
        </nav>

        <a href="mailto:info@centrumuvelickych.sk" className="btn btn--solid header__cta">
          Napísať email
        </a>

        <button
          className={`header__burger ${open ? 'is-open' : ''}`}
          aria-label="Otvoriť menu"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="header__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav>
              {LINKS.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
              ))}
              <a
                href="mailto:info@centrumuvelickych.sk"
                className="btn btn--solid"
                onClick={() => setOpen(false)}
              >
                Napísať email
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
