import React from 'react'
import './About.css'

const aboutItems = [
  {
    label: 'Project done',
    number: 4
  },
  {
    label: 'Years of experience',
    number: 1
  }
];

const About = () => {
    
  return (
    <section id='about' className='section'>
        <div className='container bg-zinc-900 text-zinc-50'>
           <h2 className='headline-2 mb-2 reveal-up'>
            About Me
          </h2>
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up mt-8'>
                <p className=' me text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
                    Welcome! I &apos;m mohamed Taha Hagag, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.Passionate about building innovative solutions that enhance business  efficiency and user experience. Adept at writing clean, efficient, and maintainable code, 
optimizing database performance, and integrating APIs.
                </p>
                <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                    {
                        aboutItems.map(({label,number},key)=>(
                        <div key={key}>
                            <div className='flex items-center md:mb-2'>
                                <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                            </div>
                            <p className='text-sm text-zinc-400'>{label}</p>
                        </div>))
                    }
                    <img
                    src='/1x/Asset 1.png'
                    alt='logo'
                    height={30}
                    width={30}
                    className='ml-auto md:w-[120px] md:h-[120px]'
                    >
                    </img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
