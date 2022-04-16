import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import About from './pages/About'
import Home from './pages/Home'
import NewsLetter from './pages/NewsLetter'
import GlobalStyles from './styles/GlobalStyles'
import { dark, light } from './styles/Themes'



const App = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new" element={<NewsLetter />} />
        </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App