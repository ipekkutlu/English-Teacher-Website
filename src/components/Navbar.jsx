import React from 'react'
import Logo from '../assets/blogo.png'
import About from './About'
import System from './System'
import Contact from './Contact'
import { useState } from 'react'
import Menu from '../assets/burger-bar.png'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)


  return (
  
      <div id="home" className='xl:h-[200px] h-[180px] flex flex-row justify-between items-center bg-white'>
        <img className='xl:w-[240px] lg:w-[220px] md:w-[200px] w-[180px] rounded-3xl' src={Logo} alt="Buket Hoca Logo" />
        <nav className='lg:flex lg:flex-row hidden justify-center items-between xl:gap-16 lg:gap-6 gap-1 mr-20 '>
          <a className='xl:text-3xl hover:text-slate-400 text-2xl text-slate-700' href="#home">Anasayfa</a>
          <a  className='xl:text-3xl hover:text-slate-400 text-2xl hover:text-slate-400 text-slate-700' href="#about">Hakkında</a>
          <a  className='xl:text-3xl  hover:text-slate-400  text-slate-700' href="#system">Öğretme Sistemi</a>
          <a  className='xl:text-3xl hover:text-slate-400  text-slate-700' href="#contact">İletişim</a>
        </nav>

        <img className="w-10 h-10 lg:hidden block mr-8" onClick={() => setIsOpen(prev => !prev)} src={Menu} alt="" />

        
          <div className={`lg:hidden top-36 w-full h-[40vh] right-0 bg-white flex flex-col ${isOpen ? 'absolute' : 'hidden'} justify-around items-center`} >
            <a className='text-2xl z-50 text-slate-700' onClick={() => setIsOpen(false)} href="#home" >Anasayfa</a>
            <a className='text-2xl z-50 text-slate-700'  onClick={() => setIsOpen(false)} href="#about" >Hakkında</a>
            <a className='text-2xl z-50 text-slate-700'  onClick={() => setIsOpen(false)}  href="#system" >Öğretme sistemi</a>
            <a className='text-2xl z-50 text-slate-700'  onClick={() => setIsOpen(false)} href="#contact" >İletişim</a>
          </div>


      </div>



  )
}

export default Navbar