"use client"
import React from 'react'
import { Code, Database, Globe, Server, Palette, GitBranch } from "lucide-react"

const skills = [
  { name: "Frontend Development", icon: Globe, description: "React, Next.js, JavaScript, TypeScript" },
  { name: "Backend Development", icon: Server, description: "Next.js, Node.js, Express, APIs" },
  { name: "Database Management", icon: Database, description: "MongoDB, PostgreSQL, PrismaORM, DrizzleORM" },
  { name: "UI/UX Design", icon: Palette, description: "Tailwind CSS, Bootstrap" },
  { name: "Version Control", icon: GitBranch, description: "Git, GitHub" },
  { name: "Programming Languages", icon: Code, description: "JavaScript, TypeScript, C / C++, Java" },
]


const Skills = () => {
  return (
    <div className='text-center text-white mt-20 items-center mb-20'>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600" />
        <span className="shrink-0 px-4">
          <div className="text-4xl">My <span className="gradient-text">Skills</span></div>
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600" />
      </span>
      <div>
        <section className="mt-10 bg-black/50">
            <div className="container max-w-5xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {skills.map((skill) => {
                    const IconComponent = skill.icon
                    return (
                    <div
                        key={skill.name}
                        className="bg-gray-900/50 border border-gray-700 md:border-gray-800 rounded-lg p-6 text-center transition-all duration-300 hover:border-white hover:bg-gray-900/80 hover:scale-105"
                    >
                        <div className="mb-4 flex justify-center">
                        <IconComponent size={40} className="text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                        <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                    )
                })}
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Skills