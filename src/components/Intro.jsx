import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const textReveal = {
  hidden: { opacity: 0, y: 18, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } },
}

const titleLines = (
  <>
    <span className="intro__title-line">Centrum</span>
    <span className="intro__title-line">u&nbsp;Velických</span>
  </>
)

export default function Intro({ onDone }) {
  const [show, setShow] = useState(() => !sessionStorage.getItem('introSeen'))

  useEffect(() => {
    if (!show) { onDone(); return }
    document.body.style.overflow = 'hidden'
    const t = setTimeout(dismiss, 3400)
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
          initial={{ backgroundColor: '#080302' }}
          animate={{ backgroundColor: '#26120c' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.1, ease }}
        >
          <div className="intro__leaves" aria-hidden="true">
            <motion.span
              className="intro__blob intro__blob--a"
              initial={{ opacity: 0, scale: 0.4, rotate: -18 }}
              animate={{ opacity: [0, 1, 0.9], scale: [0.4, 1.08, 1], rotate: [-18, 8, 0] }}
              transition={{ duration: 2, delay: 0.35, ease }}
            />
            <motion.span
              className="intro__blob intro__blob--b"
              initial={{ opacity: 0, scale: 0.35, rotate: 18 }}
              animate={{ opacity: [0, 0.75, 0.7], scale: [0.35, 1, 0.92], rotate: [18, -6, 0] }}
              transition={{ duration: 2.15, delay: 0.5, ease }}
            />
          </div>

          <motion.div
            className="intro__content"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { delayChildren: 0.9, staggerChildren: 0.22 } },
            }}
          >
            <motion.p className="intro__sub" variants={textReveal}>
              Psychiatria · Psychoterapia
            </motion.p>
            <motion.h2
              className="intro__title"
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.96, filter: 'blur(18px)' },
                show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 1.05, ease } },
              }}
            >
              <span className="intro__title-outline">{titleLines}</span>
              <motion.span
                className="intro__title-fill"
                aria-hidden="true"
                variants={{
                  hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
                  show: {
                    opacity: 1,
                    clipPath: 'inset(0% 0 0 0)',
                    transition: { delay: 0.62, duration: 0.85, ease },
                  },
                }}
              >
                {titleLines}
              </motion.span>
            </motion.h2>
            <motion.p className="intro__loc" variants={textReveal}>
              Banská Bystrica · ambulancia od 1993
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
