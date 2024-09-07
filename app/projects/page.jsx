'use client'
import React, { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"

const projectData = [
  {
    image: '/work/portfoliopic.png',
    category: 'react js',
    name: 'Portfolio Website',
    description: 'The current website you are on. Developed with the purpose of networking myself out to future clients. Stack used: ReactJS, Next.JS, TailwindCSS, ShadCn',
    link: '/',
    github: 'https://github.com/HChopra22/personal-portfolio',
  },
  {
    image: '/work/Photogpic.png',
    category: 'react js',
    name: 'Photography Website',
    description: 'A Photography Website to display all my photos. Landscapes from around the world as well as portraits. Stack used: ReactJS, Tailwind CSS, Framer Motion',
    link: 'wwww.photog.harshchopra.com',
    github: 'https://github.com/HChopra22/photog-portfolio',
  },
  {
    image: '/work/FPSShooter.png',
    category: 'Unity 3D',
    name: 'FPS 3D Zombie survival',
    description: 'A round based Zombie survival game. Developed for my final year dissertation. The game is accompanied by a 15,000 word document highlighting the key frameworks of games design using C#. Stack used: Unity',
    link: 'https://github.com/HChopra22/dissertation-text-final',
    github: 'https://github.com/HChopra22/dissertation-text-final',
  },
  {
    image: '/work/occsite.png',
    category: 'Business Dev',
    name: 'Indian Resteraunt Website',
    description: 'An Indian resteraunt developed using the Wix.com CMS. Project roadmap and development was handled by me as well as the photography. The google business page was also created and ran by me.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/disso.png',
    category: 'Business Dev',
    name: 'Games Development Dissertation',
    description: 'A 15,000 Word dissertation that covers the key concepts of games development with C# and Unity3D. The dissertation also covers the rise of games development and the dangers alongside it.',
    link: 'https://github.com/HChopra22/dissertation-text-final',
    github: 'https://github.com/HChopra22/dissertation-text-final',
  },
  {
    image: '/work/vapecoco.png',
    category: 'Business Dev',
    name: 'eCommerce Vape Website',
    description: 'An ECommerce Vape website built for client purpose using wordpress CMS and custom JS code.',
    link: 'www.vapecoco.com',
    github: 'https://github.com/HChopra22/dissertation-text-final',
  },
]

const uniqueCategories = ['all projects', ...new Set(projectData.map((item) => item.category))]

const Projects = () => {
  const [categories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all projects')
  const [loading, setLoading] = useState(false) // State to track loading

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category
  })

  const handleTabChange = (newCategory) => {
    setLoading(true)
    setCategory(newCategory)

    // Simulate a delay to show a smoother loading transition (optional)
    setTimeout(() => {
      setLoading(false)
    }, 200) // Adjust delay for better UX
  }

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[660px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((categoryItem, index) => (
              <TabsTrigger
                onClick={() => handleTabChange(categoryItem)}
                value={categoryItem}
                key={index}
                className='capitalize w-[162px] md:w-auto'>
                {categoryItem}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content area with minimum height to prevent layout shift */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[600px] relative">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Add a spinner or loading animation */}
                <p>Loading...</p>
              </div>
            ) : (
              filteredProjects.map((project, index) => (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              ))
            )}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
