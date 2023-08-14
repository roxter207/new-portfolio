import React from 'react'
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import behance from "../assets/behance-square-brands.png"


const ScoialMediaIcons = () => {
  return (
    <div
    className='flex justify-center md:justify-start my-10 gap-7'>
        <a 
        className='hover:opacity-50 transition duraiton-500  w-[35px]'
        href='https://www.linkedin.com/in/sneha-kaimal-246389200/'
        target="_blank"
        rel='noreferrer'
        >
            <img alt='LinkedIn-link' src={linkedin}/>

        </a>

        <a 
        className='hover:opacity-50 transition duraiton-500 w-[35px] '
        href='https://github.com/roxter207'
        target="_blank"
        rel='noreferrer'
        >
            <img alt='github' src={github}/>

        </a>

        <a 
        className='hover:opacity-50 transition duraiton-500 w-[34px]'
        href='https://www.behance.net/snehakaimal'
        target="_blank"
        rel='noreferrer'
        >
            <img alt='behance-link' src={behance}/>

        </a>
    </div>
  )
}

export default ScoialMediaIcons