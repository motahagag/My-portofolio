import React from 'react'
import PropTypes from 'prop-types'


const TechSkillsCard = ({
    label,
    imgSrc,
    Progress,
    desc,
    classes
}) => {
    const getColor = (value) => {
    if (value < 50 && value) return 'bg-red-600'
    if (value < 70 && value>=50) return 'bg-yellow-500'
    return 'bg-green-600'
  }

  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group'+ classes}>
      <figure className='  h-full object-cover flex items-center justify-center bg-zinc-700/50 rounded-lg overflow-hidden w-16 h-16 p-2 group-hover:bg-zinc-900 transition-colors'>
        <img 
        src={imgSrc}
        width={48}
        height={48}
        alt={label}
        />
        </figure>
            <div>
                <h3>
                    {label}
                </h3>
                <p className='text-zinc-400 text-sm'>
                    {desc}
                </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className={`${getColor(Progress)} text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition-all duration-300  animate-progress`} style={{width: `${Progress}%`}}>{Progress}%</div>
            </div>      
    </div>
  )
}

TechSkillsCard.propTypes = {
   label: PropTypes.string.isRequired,
   imgSrc: PropTypes.string.isRequired,
   desc : PropTypes.string.isRequired,
   Progress: PropTypes.number.isRequired
}
TechSkillsCard.defaultProps = {
  Progress: 0,    
  classes: ''     
}


export default TechSkillsCard
