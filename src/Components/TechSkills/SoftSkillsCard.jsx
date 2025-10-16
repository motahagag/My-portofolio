import PropTypes from 'prop-types'

const SoftSkillsCard = ({
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
    <div className={'flex items-center gap-2 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group'+ classes}>
      <figure className=' whitespace-nowrap h-full flex items-center justify-center bg-zinc-700/50 rounded-lg overflow-hidden w-25 h-16 p-1 group-hover:bg-zinc-900 transition-colors'>
        <img 
        src={imgSrc}
        width={60}
        height={60}
        alt={label}
        />
        </figure>
            <div>
                <h3 className='whitespace-nowrap'>
                    {label}
                </h3>
                <p className='text-zinc-400 text-sm'>
                    {desc}
                </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className={`${getColor(Progress)} animate-progress text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition-all duration-300`} style={{width: `${Progress}%`}}>{Progress}%</div>
            </div>      
    </div>
  )
}
SoftSkillsCard.propTypes = {
   label: PropTypes.string.isRequired,
   imgSrc: PropTypes.string.isRequired,
   desc : PropTypes.string.isRequired,
   Progress: PropTypes.number.isRequired
}
SoftSkillsCard.defaultProps = {
  Progress: 0,    
  classes: ''     
}

export default SoftSkillsCard
