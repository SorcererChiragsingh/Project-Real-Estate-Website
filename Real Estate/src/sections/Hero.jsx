import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../assets/images/hero1.webp' 
import AOS from 'aos'
import 'aos/dist/aos.css'


export const Hero = () => {

  useEffect(()=> {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, [])

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
<div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
<section id = "hero" className="hero d-flex flex-column justify-content-center align-items-center">

</section>
</div>
    </>
  )
}

export default App