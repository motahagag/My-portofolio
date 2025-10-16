import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import TechSkillsCard from './TechSkillsCard'
import SoftSkillsCard from './SoftSkillsCard';


const TechnicalSkills =[
{
    label:'HTML',
    img:'/src/icons/html-5.png',
    desc:'HTML',
    Progress: 75
},
{
    label:'css',
    img:'/src/icons/css3.svg',
    desc:'CSS',
    Progress: 60
},
{
    label:'javascript',
    img:'/src/icons/js.png',
    desc:'javascript',
    Progress: 55
},
{
    label:'ReactJS',
    img:'/src/icons/React.png',
    desc:'React js',
    Progress:60
},
{
    label:'Laravel',
    img:'/src/icons/laravel-logo-svgrepo-com.png',
    desc:'Laravel',
    Progress:70
},
{
    label:'Php',
    img:'/src/icons/php_5968332.png',
    desc:'React js',
    Progress:70
},
{
    label:'Mysql',
    img:'/src/icons/MySql.png',
    desc:'Database',
    Progress:90
},
];

const SoftSkills=[
    {
        label:'Creativity',
        img:'/src/icons/Creativity.jpg',
        desc:'Strong ability to generate innovative ideas',
        Progress: 80   
    },
    {
        label:'Communication',
        img:'/src/icons/communication.svg',
        desc:'Strong communication skills',
        Progress: 90   
    },
    {
        label:'Problem-Solving',
        img:'/src/icons/ProblemSolving.svg',
        desc:'problem-solving skills',
        Progress: 70   
    },
    {
        label:'Team-Work',
        img:'/src/icons/TeamWork.svg',
        desc:'Strong teamwork skills,collaborate effectively',
        Progress: 80   
    },
    {
        label:'Critical Thinking',
        img:'/src/icons/CriticalThinking.jpg',
        desc:'Strong critical thinking skills',
        Progress: 70   
    },
    {
        label:'Decision making',
        img:'/src/icons/Decision_Making.jpg',
        desc:'Strong decision-making skills',
        Progress: 55   
    },
    {
        label:'Adaptability',
        img:'/src/icons/Adaptability.jpg',
        desc:'adjust quickly to new challenges,technologies, work environments',
        Progress: 50   
    },

];
const TechSkills = () => {
  return (
    <section id='Skills' className='section'>
        <div className='container'>
                <h2 className='headline-2 mb-8 reveal-up'>
                My Skills 
                </h2>
            <div className='grid grid-cols-2 gap-10 lg:pl-20'>
                <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                    <h2 className='headline-2'>Technical Skills</h2>
                                {
                                    TechnicalSkills.map(({img,label,Progress,desc},key)=>(
                                        <TechSkillsCard 
                                        key ={key}
                                        imgSrc={img}
                                        label={label}
                                        Progress={Progress}
                                        desc={desc}
                                        classes='reveal-up'
                                        />
                                    ))
                                }
                                
                </div>
                <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                    <h2 className='headline-2'>Soft Skills</h2>
                     {
                                    SoftSkills.map(({img,label,Progress,desc},key)=>(
                                        <SoftSkillsCard 
                                        key ={key}
                                        imgSrc={img}
                                        label={label}
                                        Progress={Progress}
                                        desc={desc}
                                        classes='reveal-up'
                                        />
                                    ))
                                }
                </div>
            </div>
        </div>
    </section>
  )
}

export default TechSkills
