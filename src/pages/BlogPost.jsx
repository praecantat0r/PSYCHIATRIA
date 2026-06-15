import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogs } from '../data/blogs.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const CATEGORY_COLORS = {
  'Depresia': 'var(--rust-700)',
  'Duševné zdravie': 'var(--clove-800)',
  'Úzkosť': 'var(--orange-600)',
  'Psychóza': 'var(--clove-900)',
  'Vzťahy': 'var(--amber-400)',
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('sk-SK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const ease = [0.22, 1, 0.36, 1]
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease },
})

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogs.find(b => b.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const others = blogs.filter(b => b.slug !== slug).slice(0, 2)

  return (
    <>
      <Header />

      <main style={{ paddingTop: '4rem' }}>

        {/* ── Hero image ── */}
        <div className="post-hero">
          <motion.div
            className="post-hero__img"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease }}
          >
            <img src={post.image} alt={post.imageAlt} loading="eager" fetchPriority="high" />
          </motion.div>
          <div className="post-hero__overlay" />
          <div className="container post-hero__content">
            <motion.div {...up(0.15)}>
              <Link to="/blog" className="post-hero__back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                Späť na blog
              </Link>
            </motion.div>
            <motion.span
              className="blog-card__category"
              style={{ background: CATEGORY_COLORS[post.category] }}
              {...up(0.25)}
            >
              {post.category}
            </motion.span>
            <motion.h1 className="post-hero__title" {...up(0.35)}>
              {post.title}
            </motion.h1>
            <motion.p className="post-hero__subtitle" {...up(0.45)}>
              {post.subtitle}
            </motion.p>
            <motion.div className="post-hero__meta" {...up(0.55)}>
              <span>{post.author}</span>
              <span className="blog-card__dot">·</span>
              <time>{formatDate(post.date)}</time>
              <span className="blog-card__dot">·</span>
              <span>{post.readTime} čítania</span>
            </motion.div>
          </div>
        </div>

        {/* ── Article body ── */}
        <div className="container">
          <article className="post-body">
            {post.sections.map((section, si) => (
              <motion.div
                key={si}
                className="post-section"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -8% 0px' }}
                transition={{ duration: 0.7, delay: si * 0.04, ease }}
              >
                {section.heading && (
                  <h2 className="post-section__heading">{section.heading}</h2>
                )}
                {section.paragraphs.map((p, pi) => (
                  <p key={pi} className="post-section__p">{p}</p>
                ))}
              </motion.div>
            ))}

            {/* ── Author card ── */}
            <motion.div
              className="post-author"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="post-author__avatar">
                {post.author.split(' ').slice(-1)[0][0]}
              </div>
              <div>
                <p className="post-author__name">{post.author}</p>
                <p className="post-author__role">Psychiatria &amp; Psychoterapia · Centrum u Velických</p>
              </div>
            </motion.div>

            {/* ── CTA ── */}
            <motion.div
              className="post-cta"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Máte otázky?</p>
              <h2 className="h2">Kontaktujte <em>nás</em></h2>
              <p style={{ color: 'var(--ink-soft)', fontWeight: 300, marginBottom: '2rem', lineHeight: 1.7 }}>
                Ak sa Vás téma tohto článku osobne dotýka alebo hľadáte odbornú pomoc, sme tu pre Vás.
              </p>
              <a href="/#kontakt" className="btn btn--solid">
                Napísať email
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </motion.div>
          </article>
        </div>

        {/* ── More articles ── */}
        {others.length > 0 && (
          <div className="post-more">
            <div className="container">
              <p className="eyebrow">Ďalšie čítanie</p>
              <h2 className="h2">Podobné <em>články</em></h2>
              <div className="blog-grid blog-grid--small">
                {others.map(o => (
                  <Link key={o.slug} to={`/blog/${o.slug}`} className="blog-card">
                    <div className="blog-card__img">
                      <img src={o.image} alt={o.imageAlt} loading="lazy" />
                    </div>
                    <div className="blog-card__body">
                      <span
                        className="blog-card__category"
                        style={{ background: CATEGORY_COLORS[o.category] }}
                      >
                        {o.category}
                      </span>
                      <h3 className="blog-card__title">{o.title}</h3>
                      <p className="blog-card__sub">{o.subtitle}</p>
                      <div className="blog-card__meta">
                        <span>{o.readTime} čítania</span>
                        <span className="blog-card__dot">·</span>
                        <time>{formatDate(o.date)}</time>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  )
}
