import React from 'react'
import { ButtonPrimary } from '../Button/Button';

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
   {
    label: 'Services',
    href: '#services'
  },
  {
    label: 'Skills',
    href: '#Skills'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/motahagag'
  },
   {
    label: 'Facebook',
    href: 'https://www.facebook.com/mohamed.tahahagag.3'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-taha-hagag-306ab8190'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/motahagag1'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mohamedtahahagag'
  }
];

const Footer = () => {
  return (
    <section className='section'>
        <div className='container'>

            <div className='lg:grid lg:grid-cols-2'>
                <div className='mb-10'>
                    <h2 className='headline-1 mb-8 lg:max-w-[12ch] reveal-up'>
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary 
                        href='#contact'
                        label='Start Project'
                        icon='chevron_right'
                        classes='reveal-up'
                    />
                </div>

                <div className='grid grid-cols-2 gap-4 lg:pl-20'>
                    <div>
                        <p className='mb-2 reveal-up'> 
                            SiteMap
                        </p>

                        <ul>
                            {sitemap.map(({label,href},key)=>(
                                <li key={key}><a href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>{label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className='mb-2 reveal-up'> 
                           socials
                        </p>

                        <ul>
                            {socials.map(({label,href},key)=>(
                                <li key={key}><a href={href} target='_blank' className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>{label}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between pt-10 mb-8'>
             <a href='/' className='logo reveal-up'>
                <img src='/1x/Asset 1.png' width={40} height={40} alt='Logo' className='md:w-[120px] md:h-[120px]' />
             </a>
             <p className='text-zinc-800 text-sm reveal-up'>
             &copy;2025&nbsp;
             <span className='text-zinc-200'>
                 Code with Mohamed Taha Hagag
             </span>
             </p>
            </div>
        </div>
    </section>
  )
}

export default Footer
