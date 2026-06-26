import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'

const LINKS = [
  ['o-nas', 'O nás'],
  ['tim', 'Tím'],
  ['priestor', 'Priestor'],
  ['kontakt', 'Kontakt'],
]

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onBlog = location.pathname.startsWith('/blog')

  useEffect(() => {
    const tick = () => setSolid(window.scrollY > 60)
    tick()
    window.addEventListener('scroll', tick, { passive: true })
    return () => window.removeEventListener('scroll', tick)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  const handleSectionClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    if (onBlog) {
      sessionStorage.setItem('scrollTarget', id)
      navigate('/')
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${solid || open ? 'header--solid' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__brand" onClick={() => setOpen(false)}>
          <span className="header__brand-text">
            <span className="header__name">Centrum u Velických</span>
            <span className="header__tag">Psychiatria &amp; Psychoterapia</span>
          </span>
        </Link>

        <nav className="header__nav">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="header__link"
              onClick={(e) => handleSectionClick(e, id)}
            >
              {label}
            </a>
          ))}
          <Link
            to="/blog"
            className={`header__link ${onBlog ? 'header__link--active' : ''}`}
          >
            Blog
          </Link>
        </nav>

        <a href="#kontakt" className="btn btn--solid header__cta">
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
              {LINKS.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleSectionClick(e, id)}
                >
                  {label}
                </a>
              ))}
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                style={{
                  borderBottom: '1px solid rgba(255,184,77,0.16)',
                  padding: '0.95rem 0',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  display: 'block',
                }}
              >
                Blog
              </Link>
              <a
                href="#kontakt"
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
