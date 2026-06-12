import { useState } from 'react'
import Intro from './components/Intro.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import About from './components/About.jsx'
import Values from './components/Values.jsx'
import Team from './components/Team.jsx'
import PhotoBreak from './components/PhotoBreak.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Career from './components/Career.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
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
        <PhotoBreak />
        <Services />
        <Gallery />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
