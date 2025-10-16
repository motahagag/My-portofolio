import React from 'react'
import PropTypes from 'prop-types'

const ServicesCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors'+ classes}>
        <figure className='img-box aspect-square rounded-lg mb-4 '>
            <img 
            src={imgSrc}
            width={200}
            height={200}
            alt={label}
            loading='lazy'
            className='img-cover'
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
    </div>
  )
}

 ServicesCard.PropTypes ={
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
 }

export default ServicesCard
