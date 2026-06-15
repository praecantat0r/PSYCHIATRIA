import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Intro from './components/Intro.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import About from './components/About.jsx'
import Values from './components/Values.jsx'
import Team from './components/Team.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Career from './components/Career.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BlogList from './pages/BlogList.jsx'
import BlogPost from './pages/BlogPost.jsx'

function ScrollReset() {
  const location = useLocation()
  useEffect(() => {
    // Check for a pending scroll-to-section request set by Header when leaving home
    const target = sessionStorage.getItem('scrollTarget')
    if (target && location.pathname === '/') {
      sessionStorage.removeItem('scrollTarget')
      // Wait for the page to render before scrolling
      setTimeout(() => {
        const el = document.getElementById(target)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])
  return null
}

function HomePage() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      <Intro onDone={() => setIntroDone(true)} />
      <Header />
      <main>
        <Hero animate={introDone} />
        <Ticker />
        <About />
        <Values />
        <Team />
        <Services />
        <Gallery />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}
