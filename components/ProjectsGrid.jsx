'use client'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/site'

const ALL = 'all projects'
const categories = [ALL, ...new Set(projects.map((p) => p.category))]

const ProjectsGrid = () => (
  <Tabs defaultValue={ALL} className="mb-24 xl:mb-48">
    <TabsList className="w-full grid h-full grid-cols-2 md:grid-cols-4 lg:max-w-[760px] mb-12 mx-auto md:border dark:border-none">
      {categories.map((c) => (
        <TabsTrigger value={c} key={c} className="capitalize">
          {c}
        </TabsTrigger>
      ))}
    </TabsList>
    {categories.map((c) => (
      <TabsContent value={c} key={c}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => c === ALL || p.category === c)
            .map((project, i) => (
              <ProjectCard key={project.name} project={project} priority={i < 3} />
            ))}
        </div>
      </TabsContent>
    ))}
  </Tabs>
)

export default ProjectsGrid
