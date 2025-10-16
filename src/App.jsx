import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger); // register the hook to avoid React version discrepancies 

import './index.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services';
import TechSkills from './Components/TechSkills/TechSkills';
import Skills from './Components/Skills/Skills'
import Work from './Components/Work/Work'
import Reviews from './Components/Reviews/Reviews'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  useGSAP(()=>{
    const elements =gsap.utils.toArray('.reveal-up');
   

    elements.forEach((element)=>{
      gsap.to(element,{
        ScrollTrigger: {
          trigger: element,
          start:'-200 bottom',
          end:'bottom 80%',
          scrub: true
        },
        y:0,
        opacity:1,
        duration:1,
        ease:'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TechSkills />
        <Skills />
        <Work />
        <Reviews />
        <Contact />
      </main>
        <Footer />
    </ReactLenis>
  )
}

export default App
