import { Github, Linkedin } from 'lucide-react';
import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from 'react-icons/md';

const ContactMe = () => {
  return (
    <div className='text-center text-white mt-20 items-center mb-10' id='contact'>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600" />
        <span className="shrink-0 px-4">
          <div className="text-4xl">Con<span className="gradient-text">tact Me</span></div>
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600" />
      </span> 
      <div>
        <p className="text-center text-white/80 mt-5 text-xl">
          Got an idea, question, or collaboration in mind?<br />
          I'm just a click away — let&#39;s build something amazing together!
        </p>
        <div className='flex flex-col items-center justify-center gap-4 mt-10 w-full'>
        {[
          { icon: <BsTwitterX className="w-5 h-5" />, label: "Twitter", link: "https://twitter.com/sleepypritish" },
          { icon: <MdEmail className="w-5 h-5" />, label: "Email Me", link: "mailto:pritishjadon25@gmail.com" },
          { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", link: "https://www.linkedin.com/in/pritish25/" },
          { icon: <Github className="w-5 h-5" />, label: "GitHub", link: "https://github.com/hitsugayatt" },
        ].map(({ icon, label, link }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm flex items-center gap-3 px-6 py-3 rounded-lg border border-slate-700 bg-black/50 hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-200"
          >
            {icon}
            <span className="text-lg">{label}</span>
          </a>
        ))}
      </div>
      </div>
    </div>
  )
}

export default ContactMe;
