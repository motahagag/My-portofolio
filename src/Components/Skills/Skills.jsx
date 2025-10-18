import React from 'react'
import Skillcard from './Skillcard/Skillcard';

const skillItem = [
  {
    imgSrc: '/icons/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/icons/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/icons/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/icons/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/icons/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/icons/MySql.png',
    label: 'Mysql',
    desc: 'Database'
  },
  {
    imgSrc: '/icons/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/icons/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skills = () => {
  return (
    <section className='section'>
        <div className='container'>
            <h2 className='headline-2 reveal-up'>
            Essential tools i use 
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
            {
                skillItem.map(({imgSrc,label,desc},key)=>(
                    <Skillcard 
                     key ={key}
                     imgSrc={imgSrc}
                     label={label}
                     desc={desc}
                     classes='reveal-up'
                    />
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default Skills
