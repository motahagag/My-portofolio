import React from 'react'
import ServicesCard from './ServicesCard/ServicesCard'

const services = [
  {
    imgSrc: '/Services/back-end.jpg',
    label: 'Back end',
    desc: 'Back-end web development'
  },
  {
    imgSrc: '/Services/front_end.jpg',
    label: 'Front End',
    desc: 'Front-end web development'
  },
  {
    imgSrc: '/Services/full-stack.jpg',
    label: 'Full-Stack development',
    desc: 'Full-Stack web development'
  }
];

const Services = () => {
  return (
    <section id='services' className=' mt-20'>
      <div className='container mt-8'>
          <h2 className='headline-2 reveal-up'>
            My services
          </h2>
          <div className='grid gap-10 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mt-8'>
                      {
                          services.map(({imgSrc,label,desc},key)=>(
                              <ServicesCard 
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

export default Services
