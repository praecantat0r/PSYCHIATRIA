import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Intro({ onDone }) {
  const [show, setShow] = useState(() => !sessionStorage.getItem('introSeen'))

  useEffect(() => {
    if (!show) { onDone(); return }
    document.body.style.overflow = 'hidden'
    const t = setTimeout(dismiss, 2600)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function dismiss() {
    sessionStorage.setItem('introSeen', '1')
    document.body.style.overflow = ''
    setShow(false)
    onDone()
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          onClick={dismiss}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="intro__leaves" aria-hidden="true">
            <motion.span
              className="intro__blob intro__blob--a"
              animate={{ scale: [1, 1.15, 1], rotate: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="intro__blob intro__blob--b"
              animate={{ scale: [1.1, 0.95, 1.1], rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <div className="intro__content">
            <motion.p
              className="intro__sub"
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Psychiatria · Psychoterapia
            </motion.p>
            <motion.h2
              className="intro__title"
              initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Centrum<br />u&nbsp;Velických
            </motion.h2>
            <motion.p
              className="intro__loc"
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Banská Bystrica · od 2013
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
