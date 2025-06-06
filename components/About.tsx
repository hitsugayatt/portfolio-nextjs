import React from 'react'

const About = () => {
  return (
    <div className='text-center text-white items-center' id='about'>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></span>

        <span className="shrink-0 px-4"><div className='text-4xl'>About <span className='gradient-text'>Me</span></div></span>

        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
      </span>
      <div className='mt-10 text-xl leading-relaxed px-5 md:px-0'>
        <p className='mb-4'>Final Year CS graduate, passionate Full-Stack Developer who loves turning ideas into reality through clean code and beautiful design.
        I build web apps that are fast, responsive, and user-friendly.</p>
        <p className='mb-4'>With a deep interest in solving algorithmic challenges, I started my journey as a competitive programmer before diving into the world of full-stack development.</p>
        <p className='mb-20'>When I&apos;m not coding, I&apos;m binge-watching animes and playing video games. </p>
      </div>
    </div>
    
  )
}

export default About