const ITEMS = [
  'Psychiatria', 'Psychoterapia', 'Od roku 2013', 'Banská Bystrica',
  'Diskrétnosť', 'Individuálny prístup',
]

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[0, 1].map(copy => (
          <div className="ticker__group" key={copy}>
            {row.map((item, i) => (
              <span className="ticker__item" key={i}>
                {item}
                <svg className="ticker__leaf" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C7 7 4 11 4 15a8 8 0 0 0 16 0c0-4-3-8-8-13Z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
