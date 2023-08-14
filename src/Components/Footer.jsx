import React from 'react'
import ScoialMediaIcons from './ScoialMediaIcons'


const Footer = () => {
  return (
    <footer className='h-64 bg-red pt-10'>
        <div className='w-5/6 mx-auto'>
            <ScoialMediaIcons/>
            <div className='md:flex justify-center md:justify-between text-center'>
                <p className='font-playfair font-semibold text-2xl text-yellow'>SNEHA KAIMAL</p>
                <p className='font-playfair text-md text-yellow'>©2023 KAIMAL. All Rights Reserved.</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer