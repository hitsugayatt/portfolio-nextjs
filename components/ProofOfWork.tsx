'use client'
import React from 'react'
import { ShineBorder } from "@/components/magicui/shine-border"
import { ExternalLink, Github } from 'lucide-react';
import {motion} from "framer-motion"
import Image from 'next/image';

const projects = [
  {
    title: "SkillsUpgrade",
    description: "An AI-Powered learning platform. User can create courses on any topic of their choice, pick difficulty and modify the course according to their needs.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Tailwind CSS", "Drizzle ORM"],
    links: {
      website: "https://skillsupgrade.vercel.app/",
      source: "https://github.com/hitsugayatt/SkillsUpgrade"
    },
    img: "/skillsupgrade.png"
  },
  {
    title: "SkillsUpgrade",
    description: "An AI-Powered learning platform. User can create courses on any topic of their choice, pick difficulty and modify the course according to their needs.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Tailwind CSS", "Drizzle ORM"],
    links: {
      website: "https://skillsupgrade.vercel.app/",
      source: "https://github.com/hitsugayatt/SkillsUpgrade"
    },
    img: "/skillsupgrade.png"
  },
  {
    title: "SkillsUpgrade",
    description: "An AI-Powered learning platform. User can create courses on any topic of their choice, pick difficulty and modify the course according to their needs.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Tailwind CSS", "Drizzle ORM"],
    links: {
      website: "https://skillsupgrade.vercel.app/",
      source: "https://github.com/hitsugayatt/SkillsUpgrade"
    },
    img: "/skillsupgrade.png"
  },
  {
    title: "SkillsUpgrade",
    description: "An AI-Powered learning platform. User can create courses on any topic of their choice, pick difficulty and modify the course according to their needs.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Tailwind CSS", "Drizzle ORM"],
    links: {
      website: "https://skillsupgrade.vercel.app/",
      source: "https://github.com/hitsugayatt/SkillsUpgrade"
    },
    img: "/skillsupgrade.png"
  }
];

const ProofOfWork = () => {
  return (
    <div className="text-white items-center text-center">
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600" />
        <span className="shrink-0 px-4">
          <div className="text-4xl">Proof <span className="gradient-text">Of Work</span></div>
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600" />
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-3">
        {/* OrbitToken */}
        {projects.map((proj, idx)=>{
            return <div className="relative rounded-xl p-[2px] mb-1" key={idx}>
                <Image alt={proj.title} src={proj.img}/>
                <ShineBorder shineColor="white" className="z-0" duration={7}/>
                <div className="relative z-10 bg-[#0d0d0d] rounded-xl p-6 text-left">
                    <h2 className="text-xl font-bold mb-2">{proj.title}</h2>
                    <p className="text-sm text-slate-200 mb-4 leading-relaxed">{proj.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                        {proj.tech.map((tech, index) => {
                            return <span key={index} className="bg-gray-800 cursor-pointer hover:bg-white hover:text-black transition-all ease-in-out duration-300 px-2 py-0.5 rounded">{tech}</span>
                        })}
                    </div>
                <div className="flex space-x-4 mt-4">
                <motion.a
                  href={proj.links.website}
                  className="flex items-center text-sm hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} className="mr-1" />
                  Website
                </motion.a>
                <motion.a
                  href={proj.links.source}
                  className="flex items-center text-sm hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} className="mr-1" />
                  Source
                </motion.a>
              </div>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default ProofOfWork
