import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import Heroimg from '../assets/images/hero1.webp' 
import aos from 'aos'
import 'aos/dist/aos.css'


export const Hero = () => {

  useEffect(()=> {
    Aos.init({
      offset; 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, [])

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
<div>

</div>
    </>
  )
}

export default App