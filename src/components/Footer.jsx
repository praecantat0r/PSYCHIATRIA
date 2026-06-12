export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__badge">CV</span>
          <span>Centrum u Velických</span>
        </div>
        <p className="footer__legal">
          PSYCHIATRIA &amp; PSYCHOTERAPIA s.r.o. · IČO: 47014113<br />
          <a href="mailto:info@centrumuvelickych.sk">info@centrumuvelickych.sk</a>
        </p>
        <p className="footer__copy">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
