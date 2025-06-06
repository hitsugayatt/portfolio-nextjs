"use client"
import React from 'react'

import { Home, Menu, User, FileText, Github, Linkedin, ImageIcon } from "lucide-react";
import Image from 'next/image';
import { motion } from 'framer-motion'
import { BsTwitterX } from "react-icons/bs";
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  return (
    <div className= 'min-h-screen'>
        <div className="fixed backdrop-blur-md top-4 left-1/2 transform -translate-x-1/2 z-50 bg-neutral-900/60 py-3 text-white px-2 md:px-4 lg:px-6 rounded-2xl flex items-center gap-2 border border-neutral-600 w-fit lg:gap-3 lg:min-w-2xl justify-center">
        <button onClick={()=>router.push('/')} className="transition-all duration-300 ease-in-out px-2 hover:px-5 hover:cursor-pointer hover:text-yellow-500 hover:scale-110">
          <Home/>
        </button>
        <button onClick={()=>router.push('#about')} className="transition-all duration-300 ease-in-out px-2 hover:px-5 hover:cursor-pointer hover:text-yellow-500 hover:scale-110">
          <User/>
        </button>
        <button onClick={()=>router.push('#projects')} className="transition-all duration-300 ease-in-out px-2 hover:px-5 hover:cursor-pointer hover:text-yellow-500 hover:scale-110">
          <ImageIcon/>
        </button>
        <button onClick={()=>router.push('/blogs')} className="transition-all duration-300 ease-in-out px-2 hover:px-5 hover:cursor-pointer hover:text-yellow-500 hover:scale-110">
          <Menu/>
        </button>
        <Divider />
        <a href="https://drive.google.com/file/d/1dgK0FUDKpHzMmpeuKZXdaYRMlgiwXDid/view?usp=sharing" target='_blank' className='flex flex-col justify-center'>
        <button className="transition-all duration-300 ease-in-out px-2 hover:px-5 hover:cursor-pointer hover:text-yellow-500 hover:scale-110">
          <FileText/>
        </button></a>
        <a href="https://github.com/hitsugayatt" target='_blank' className='flex flex-col justify-center'>
        <button className="transition-all duration-300 ease-in-out px-2 hover:px-5 hover:cursor-pointer hover:text-yellow-500 hover:scale-110">
          <Github/>
        </button></a>
        <a href="https://x.com/sleepypritish" target='_blank' className='flex flex-col justify-center'>
        <button className="transition-all duration-300 ease-in-out px-2 hover:px-5 hover:cursor-pointer hover:text-yellow-500 hover:scale-110">
          <BsTwitterX/>
        </button></a>
        <a href="https://www.linkedin.com/in/pritish25/" target='_blank' className='flex flex-col justify-center'>
        <button className="transition-all duration-300 ease-in-out px-2 hover:px-5 hover:cursor-pointer hover:text-yellow-500 hover:scale-110">
          <Linkedin/>
        </button></a>
        </div>
        <div className='flex justify-center items-center text-center mt-20'>
            <div className='rounded-full'>
                <Image src={'/nagumooo.jpg'} alt='pfp' width={130} height={130} className='rounded-full'/>
            </div>
        </div>
        <div className='text-white text-center mt-10'>
            <h1 className='font-bold text-6xl '>Hello, I&apos;m Pritish Jadon</h1>
            <h2 className='font-serif mt-3 text-4xl text-gray-400 animate-pulse duration-500'>Building digital experiences with code.</h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-10 justify-center mt-10 text-center px-10 md:px-5"
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
    </div>
  );
};


const Divider = () => (
  <div className="w-px h-5 bg-neutral-500 mx-2"></div>
);


export default Hero