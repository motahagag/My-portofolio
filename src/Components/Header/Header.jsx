import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

const Header = () => {
  const[navOpen,setNavOpen]=useState(false);
  return (
    <header className='fixed top-0 left-0 w-full z-20 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className='max-w-screen-2xl mx-auto  px-4 md:px-6 flex items-center justify-between h-30'>
            <h1>
            <a href='/' className='logo' >
            <img src='/1x/Asset 1.png' width={80} height={80} alt='mohamed taha hagag' className=' mt-8 ml-5'></img>
            </a>
            </h1>
        <div className='relative md:justify-self-center top-1'>
            <button className='menu-btn md:hidden ' onClick={()=>setNavOpen((pref)=> !pref)}>
               <span className="material-symbols-rounded">{navOpen ? 'close':'menu'}</span>
            </button> 
            <Navbar navOpen={navOpen}/>
        </div>
          <a href='#contact' className='btn btn-secondary max-md:hidden md:justify-self-end'>Contact me</a>
        </div>
    </header>
  )
}

export default Header


