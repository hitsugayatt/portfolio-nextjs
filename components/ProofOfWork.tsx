'use client'
import React from 'react'
import { ShineBorder } from "@/components/magicui/shine-border"
import { ExternalLink, Github } from 'lucide-react';
import {motion} from "framer-motion"


type Status = "live" | "in-progress";

interface Project {
  title: string;
  description: string;
  tech: string[];
  links: {
    website: string;
    source: string;
  };
  img: string;
  status: Status;
}

const StatusBadge = ({ status }: { status: "live" | "in-progress" }) => {
  const color = status === "live" ? "bg-green-500" : "bg-yellow-400";
  const label = status === "live" ? "Live" : "In Progress";

  return (
    <div className="flex items-center space-x-2 ml-2">
      <span className={`relative flex h-3 w-3`}>
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-3 w-3 ${color}`}></span>
      </span>
      <span className="text-sm text-white/80">{label}</span>
    </div>
  );
};

const projects : Project [] = [
  {
    title: "SkillsUpgrade",
    description: "An AI-Powered learning platform. User can create courses on any topic of their choice, track their progress, pick difficulty and modify the course according to their needs.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Tailwind CSS", "Drizzle ORM"],
    links: {
      website: "https://skillsupgrade.vercel.app/",
      source: "https://github.com/hitsugayatt/SkillsUpgrade"
    },
    img: "/skillsupgrade.png",
    status : "live"
  },
  {
    title: "BlogSpace",
    description: "Blogspace is a platform that allows users to create, manage, and share their blog posts with an audience. Provides features such as user authentication, post creation and editing.",
    tech: ["Reactjs", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma ORM", "honojs", "cloudflare workers"],
    links: {
      website: "https://blogspace-pritish.netlify.app/",
      source: "https://github.com/hitsugayatt/blogspace"
    },
    img: "/skillsupgrade.png",
    status : "in-progress"
  },
  {
    title: "Portfolio",
    description: "My newest version of portfolio. Dark themed with modern animations and microinteractions",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Tailwind CSS", "Drizzle ORM"],
    links: {
      website: "https://pritish.me",
      source: "https://github.com/hitsugayatt/portfolio-nextjs"
    },
    img: "/skillsupgrade.png",
    status : "live"
  },
  {
    title: "BlogSpace Landing Page",
    description: "Landing page for BlogSpace, because the project is in progress.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Tailwind CSS", "Drizzle ORM"],
    links: {
      website: "https://blogspace-pritish.netlify.app/",
      source: "https://github.com/hitsugayatt/SkillsUpgrade"
    },
    img: "/skillsupgrade.png",
    status : "live"
  }
];

const ProofOfWork = () => {
  return (
    <div className="text-white items-center text-center" id='projects'>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600" />
        <span className="shrink-0 px-4">
          <div className="text-4xl">Proof <span className="gradient-text">Of Work</span></div>
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600" />
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-3 px-5 md:px-0">
        {projects.map((proj, idx)=>{
            return <div className="relative rounded-xl p-[2px] mb-1" key={idx}>
                {/* <Image alt={proj.title} src={proj.img}/> */}
                <ShineBorder shineColor="white" className="z-0" duration={7}/>
                <div className="relative z-10 bg-[#0d0d0d] rounded-xl p-6 text-left">
                    <div className='flex justify-between'>
                      <h2 className="text-xl font-bold mb-2">{proj.title}</h2>
                      <StatusBadge status={proj.status} />
                    </div>
                    <p className="text-sm text-slate-300 mb-5">{proj.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                        {proj.tech.map((tech, index) => {
                            return <span key={index} className="bg-gray-800 cursor-pointer hover:bg-white hover:text-black transition-all ease-in-out duration-150 px-2 py-0.5 rounded">{tech}</span>
                        })}
                    </div>
                <div className="flex space-x-4 mt-5">
                {proj.links.website && <motion.a target='_blank'
                  href={proj.links.website}
                  className="flex items-center text-sm hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} className="mr-1" />
                  Website
                </motion.a>}
                <motion.a target='_blank'
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
