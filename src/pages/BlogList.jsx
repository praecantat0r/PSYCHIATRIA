import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogs } from '../data/blogs.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'

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

export default function BlogList() {
  const [featured, ...rest] = blogs

  return (
    <>
      <Header />

      <main style={{ paddingTop: '4rem' }}>
        {/* ── Hero strip ── */}
        <div className="blog-list-hero">
          <div className="container">
            <motion.p
              className="eyebrow eyebrow--accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Centrum u Velických
            </motion.p>
            <motion.h1
              className="h2 h2--light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Blog
            </motion.h1>
            <motion.p
              className="blog-list-hero__sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Odborné články o duševnom zdraví.
            </motion.p>
          </div>
        </div>

        <div className="container section">

          {/* ── Featured post ── */}
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="blog-featured">
              <div className="blog-featured__img">
                <img src={featured.image} alt={featured.imageAlt} loading="lazy" />
              </div>
              <div className="blog-featured__body">
                <span
                  className="blog-card__category"
                  style={{ background: CATEGORY_COLORS[featured.category] }}
                >
                  {featured.category}
                </span>
                <h2 className="blog-featured__title">{featured.title}</h2>
                <p className="blog-featured__subtitle">{featured.subtitle}</p>
                <p className="blog-card__excerpt">{featured.excerpt}</p>
                <div className="blog-card__meta">
                  <span className="blog-card__author">{featured.author}</span>
                  <span className="blog-card__dot">·</span>
                  <time>{formatDate(featured.date)}</time>
                  <span className="blog-card__dot">·</span>
                  <span>{featured.readTime} čítania</span>
                </div>
                <span className="blog-featured__cta">
                  Čítať článok
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </div>
            </Link>
          </Reveal>

          {/* ── Grid of remaining posts ── */}
          <div className="blog-grid">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.07}>
                <Link to={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card__img">
                    <img src={post.image} alt={post.imageAlt} loading="lazy" />
                  </div>
                  <div className="blog-card__body">
                    <span
                      className="blog-card__category"
                      style={{ background: CATEGORY_COLORS[post.category] }}
                    >
                      {post.category}
                    </span>
                    <h3 className="blog-card__title">{post.title}</h3>
                    <p className="blog-card__sub">{post.subtitle}</p>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <div className="blog-card__meta">
                      <span className="blog-card__author">{post.author}</span>
                      <span className="blog-card__dot">·</span>
                      <time>{formatDate(post.date)}</time>
                      <span className="blog-card__dot">·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
