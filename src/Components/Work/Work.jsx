import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';

const works = [
 {
    imgSrc: '/Projects/project-1.jpg',
    title: 'Blood donation website',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://github.com/motahagag/blood-donation'
  },
  {
    imgSrc: '/Projects/project-4.jpg',
    title: 'Blogs website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/motahagag/Blogs_website'
  },
  {
    imgSrc: '/Projects/project-5.jpg',
    title: 'Product Reviews detection app',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/motahagag/finalProject'
  },
  {
    imgSrc: '/Projects/project-6.jpg',
    title: ' Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
];

const Work = () => {
  return (
    <section id='work' className='section' >
        <div className='container'>
            <h2 className='headline-2 mb-8 reveal-up'>
                My portfolio highlights
            </h2>
            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectlink={projectLink}
                    classes='reveal-up'
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work
