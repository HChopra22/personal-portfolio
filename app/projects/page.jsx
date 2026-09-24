import { pageMetadata } from '@/lib/metadata'
import ProjectsGrid from '@/components/ProjectsGrid'

export const metadata = pageMetadata({
  title: 'Projects',
  description: 'Websites, client builds and games by Harsh Chopra — React and Next.js sites, WordPress and Wix client projects, and a Unity FPS game.',
  path: '/projects',
})

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h1 className="section-title mb-8 xl:mb-16 text-center mx-auto">My projects</h1>
        <ProjectsGrid />
      </div>
    </section>
  )
}
