import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../assets/images/hero1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'


export const Hero = () => {

  useEffect(() => {
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
        <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-x1 flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20'
          style={{ backgroundImage: `url(${hero})` }}>
<h1 data-aos="zoom-in" className="text-6x1 text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]">Find Your Dream Home</h1>


        </section>
      </div>
    </>
  )
}

export default App