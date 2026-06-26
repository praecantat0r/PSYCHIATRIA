import { useEffect, useRef } from 'react'

const ITEMS = [
  'Psychiatria', 'Psychoterapia', 'Od roku 1993', 'Banská Bystrica',
  'Diskrétnosť', 'Individuálny prístup',
]

export default function Ticker() {
  const wrapRef = useRef(null)
  const trackRef = useRef(null)
  const row = [...ITEMS, ...ITEMS, ...ITEMS]

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return
    const observer = new IntersectionObserver(
      ([entry]) => { track.style.animationPlayState = entry.isIntersecting ? '' : 'paused' },
      { threshold: 0 }
    )
    observer.observe(wrap)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="ticker" aria-hidden="true" ref={wrapRef}>
      <div className="ticker__track" ref={trackRef}>
        {[0, 1].map(copy => (
          <div className="ticker__group" key={copy}>
            {row.map((item, i) => (
              <span className="ticker__item" key={i}>
                {item}
                <svg className="ticker__mark" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3.5 20.5 12 12 20.5 3.5 12 12 3.5Z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
