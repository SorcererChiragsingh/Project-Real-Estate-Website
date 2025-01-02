import React from 'react'
import { DarkModeProvider } from './components/DarkModeContext'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'



export const App = () => {
  return (
    <>
    <DarkModeProvider>
      <Header />
      <Hero />
      <About  />  
      <PopularAreas />

    </DarkModeProvider>
    </>
  )
}

export default App