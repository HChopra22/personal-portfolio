import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Github, Link2Icon, ArrowRight } from 'lucide-react'

const iconBtn =
  'relative z-20 bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center transition-all duration-200 ' +
  '[@media(hover:hover)]:scale-0 [@media(hover:hover)]:opacity-0 group-hover:scale-100 group-hover:opacity-100 focus-visible:scale-100 focus-visible:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100'

const ProjectCard = ({ project, priority = false }) => {
  const external = project.link && project.link.startsWith('http')
  const caseStudy = project.slug ? `/work/${project.slug}` : null
  return (
    <Card className="group overflow-hidden mx-auto relative h-full flex flex-col transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="p-0 relative">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:dark:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-8 shadow-2xl object-cover object-top w-[260px] h-[210px] rounded-md transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]"
            src={project.image}
            width={520}
            height={420}
            sizes="260px"
            alt={`Screenshot of ${project.name}`}
            priority={priority}
          />
          {(project.link || project.github) && (
            <div className="flex gap-x-4 relative z-10">
              {project.link && (
                <a href={project.link} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={`Visit ${project.name} (opens live site)`} className={iconBtn}>
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
        {caseStudy && (
          <span className="absolute z-10 top-4 right-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground">Case study</span>
        )}
      </CardHeader>
      <div className="px-8 py-6 flex-1 flex flex-col">
        <h3 className="h4 mb-1">
          {caseStudy ? (
            // stretched link: the whole card opens the case study; icon buttons sit above it
            <Link href={caseStudy} className="after:absolute after:inset-0 after:z-[5] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring after:rounded-lg">
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h3>
        <p className="text-muted-foreground text-lg flex-1">{project.description}</p>
        {caseStudy && (
          <span className="mt-4 inline-flex items-center gap-x-2 font-medium text-primary">
            Read case study <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        )}
      </div>
    </Card>
  )
}

export default ProjectCard
