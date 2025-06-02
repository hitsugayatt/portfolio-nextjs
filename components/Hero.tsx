"use client"
import React from 'react'

import { Home, Code, Menu, User, FileText, Github, X, Linkedin, Moon } from "lucide-react";
import Image from 'next/image';
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className= 'min-h-screen'>
        <div className="fixed backdrop-blur-md top-4 left-1/2 transform -translate-x-1/2 z-50 bg-neutral-900/60 py-3 text-white px-6 rounded-2xl flex items-center gap-2 border border-neutral-600 w-fit lg:gap-3 lg:min-w-2xl justify-center">
        <NavItem icon={<Home  />} />
        <NavItem icon={<Code />} />
        <NavItem icon={<Menu />} />
        <NavItem icon={<User />} />

        <Divider />

        <NavItem icon={<FileText />} />
        <NavItem icon={<Github />} />
        <NavItem icon={<X />} />
        <NavItem icon={<Linkedin />} />
        </div>
        <div className='flex justify-center items-center text-center mt-20'>
            <div className='rounded-full'>
                <Image src={'/nagumooo.jpg'} alt='pfp' width={130} height={130} className='rounded-full'/>
            </div>
        </div>
        <div className='text-white text-center mt-10'>
            <h1 className='font-bold text-6xl '>Hello, I'm Pritish Jadon</h1>
            <h2 className='font-serif mt-3 text-4xl text-gray-400 animate-pulse duration-500'>Building digital experiences with code.</h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-10 justify-center mt-10"
        >
          <a href="#projects" className="moving-border-btn">
            <span className="border-left"></span>
            <span className="border-right"></span>
            <span className="relative z-10">View My Work</span>
          </a>
          <a href="#contact" className="moving-border-btn text-white">
            <span className="border-left"></span>
            <span className="border-right"></span>
            <span className="relative z-10">Get In Touch</span>
          </a>
        </motion.div>



        {/* <div>
            <div className="grid place-content-center p-4">
                <DrawOutlineButton>Hover me</DrawOutlineButton>
            </div>
        </div> */}
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest } : {
    children : React.ReactNode
}) => {
  return (
    <button
      {...rest}
      className="group relative hover:cursor-pointer px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

const NavItem = ({ icon }: { icon: React.ReactNode }) => (
  <button className="transition-all duration-300 ease-in-out px-2 hover:px-5 hover:cursor-pointer hover:text-yellow-500 hover:scale-110">
  {icon}
</button>
);

const Divider = () => (
  <div className="w-px h-5 bg-neutral-500 mx-2"></div>
);


export default Hero