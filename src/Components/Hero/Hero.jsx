import React from 'react'
import './Hero.css'
import { ButtonPrimary,ButtonOutline } from '../Button/Button'

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36 w-full min-h-screen bg-[#0f0f11] text-white flex items-center'>
        <div className='container mx-auto max-w-full grid lg:grid lg:grid-cols-2 items-center lg:gap-10 px-6'>
            <div>
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img src='../../../src/assets/Imgs/mody.jpg' 
                            width={40}
                            height={40}
                            alt='motahagag'
                            className='img-cover'
                        />
                    </figure>
                    <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                    <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                        <span className='absolute inset-0 w-2 h-2 rounded- animate-ping bg-emerald-400'>

                        </span>
                    </span>

                    Available for work
                    </div>
                </div>
                <h1 className='headline-2'>
                   Eng / Mohamed Taha Hagag
                </h1>
                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] mt-5 mb-8 lg:mb-10  '>
                    hands-on experience in designing and developing scalable web
                    applications. Proficient in Laravel, PHP, React.js, and MySQL with a solid foundation
                    in software architecture.                 
                </h2>
                <div className='flex items-center gap-3'>
                    <ButtonPrimary 
                    label='Download Cv'
                    href='../../../public/Main_CV/Mohamed_Taha_Haga_CV.pdf'
                    target='_blank'
                    icon='download'
                    />

                    <ButtonOutline
                    href="#about" 
                    label="Scroll down"
                    icon="arrow_downward"
                    />
                </div>
            </div>
            <div className='hidden lg:block'>
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                    <img src='../../../public/Mohamed.png'
                          width={656}
                          height={100}
                          alt='Mohamed Taha Hagag'
                          className='w-full'
                          />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero
