import Image from 'next/image'
import { Card, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Github, Link2Icon } from 'lucide-react'

const iconBtn =
  'bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center transition-all duration-200 ' +
  // always visible on touch devices; reveal on hover/focus where hover exists
  '[@media(hover:hover)]:scale-0 [@media(hover:hover)]:opacity-0 group-hover:scale-100 group-hover:opacity-100 focus-visible:scale-100 focus-visible:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100'

const ProjectCard = ({ project, priority = false }) => {
  const external = project.link && project.link.startsWith('http')
  return (
    <Card className="group overflow-hidden mx-auto relative h-full flex flex-col">
      <CardHeader className="p-0 relative">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:dark:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-8 shadow-2xl object-cover object-top w-[247px] h-[200px]"
            src={project.image}
            width={494}
            height={400}
            sizes="247px"
            alt={`Screenshot of ${project.name}`}
            priority={priority}
          />
          {(project.link || project.github) && (
            <div className="flex gap-x-4 relative z-10">
              {project.link && (
                <a
                  href={project.link}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={`Visit ${project.name}`}
                  className={iconBtn}
                >
                  <Link2Icon className="text-white" aria-hidden="true" />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source code on GitHub`} className={iconBtn}>
                  <Github className="text-white" aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
        <Badge className="uppercase text-sm font-medium mb-2 absolute z-10 top-4 left-4 xl:left-5">{project.category}</Badge>
      </CardHeader>
      <div className="px-8 py-6 flex-1">
        <h3 className="h4 mb-1">{project.name}</h3>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
