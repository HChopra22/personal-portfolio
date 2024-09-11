import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Github, Link2Icon } from 'lucide-react'

const ProjectCard = ({ project }) => {
  return (
    <Card className='group overflow-hidden mx-auto relative'>
      <CardHeader className='p-0 relative'>
        {/*image */}
        <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:dark:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            className='absolute bottom-8 shadow-2xl'
            src={project.image}
            width={247}
            height={250}
            alt={project.name}
            priority
          />
          {/*buttons */}
          <div className='flex gap-x-4'>
            <Link
              href={project.link}
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
            >
              <Link2Icon className='text-white' />
            </Link>
            <Link
              href={project.github}
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
            >
              <Github className='text-white' />
            </Link>
          </div>
        </div>
        {/* Badge */}
        <Badge className='uppercase text-sm font-medium mb-2 absolute z-10 top-4 left-4 xl:top-4 xl:left-5'>
          {project.category}
        </Badge>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='text-muted-foreground text-lg'>{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
