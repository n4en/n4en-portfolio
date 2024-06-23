import { useState, useEffect } from 'react'

import Navigation from './components/Navigation'
import Main from './components/Main'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Skills from './components/Skills'

import FadeIn from './components/FadeIn'
import './assets/styles/Index.scss'

function App() {
  const [mode, setMode] = useState<string>('dark')

  const handleModeChange = () => {
    if (mode === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div
      className={`main-container ${
        mode === 'dark' ? 'dark-mode' : 'light-mode'
      }`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise/>
        <Skills/>
        <Footer/>
      </FadeIn>
    </div>
  )
}

export default App
