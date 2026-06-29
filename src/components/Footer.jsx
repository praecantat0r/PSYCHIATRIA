export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
<p className="footer__legal">
          PSYCHIATRIA &amp; PSYCHOTERAPIA s.r.o. · IČO: 47014113<br />
          <a href="mailto:psychiatriavelicki@gmail.com">psychiatriavelicki@gmail.com</a>
        </p>
        <a href="/#kontakt" className="btn btn--accent footer__cta">
          Napísať nám
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
        <p className="footer__copy">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
