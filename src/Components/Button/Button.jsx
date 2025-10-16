import React from 'react'
import propTypes from 'prop-types'

const ButtonPrimary = ({
    href,
    target='_self',
    label,
    icon,
    classes
}) => {
if(href){
        return(
            <a 
             href={href} 
             target={target}
             className={'btn btn-primary  '+ classes}
            >
            {label}

            {icon ?
                <span className='material-symbols-rounded' aria-hidden='true'>
                {icon}
                </span> : undefined}
            </a>
        )
    }
    else{
        return(
            <button className={'btn btn-primary '+classes}>
                {label}
                {icon ?
                <span className='material-symbols-rounded' aria-hidden='true'>
                {icon}
                </span> : undefined}
            </button>
        )
    }
}

ButtonPrimary.PropTypes={
    label: propTypes.string.isRequired,
    href: propTypes.string,
    target: propTypes.string,
    icon:propTypes.string,
    classes: propTypes.string
}

const ButtonOutline = ({
    href,
    target='_self',
    label,
    icon,
    classes
}) => {
if(href){
        return(
            <a 
             href={href} 
             target={target}
             className={'btn btn-outline  '+ classes}
            >
            {label}

            {icon ?
                <span className='material-symbols-rounded' aria-hidden='true'>
                {icon}
                </span> : undefined}
            </a>
        )
    }
    else{
        return(
            <button className={'btn btn-outline '+classes}>
                {label}
                {icon ?
                <span className='material-symbols-rounded' aria-hidden='true'>
                {icon}
                </span> : undefined}
            </button>
        )
    }
}

ButtonOutline.PropTypes={
    label: propTypes.string.isRequired,
    href: propTypes.string,
    target: propTypes.string,
    icon:propTypes.string,
    classes: propTypes.string
}

export {
    ButtonPrimary,ButtonOutline
}
