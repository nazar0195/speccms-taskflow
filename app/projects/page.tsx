import PageLayout from "@/components/PageLayout"
import Button from "@/components/Button"
import ProjectCard from "@/components/ProjectCard"

interface Project {
  id: number
  title: string
  description: string
  progress: number
  tasksCount: number
}

export default function Projects(): JSX.Element {
  const projects: Project[] = [
    {
      id: 1,
      title: "Website Redesign",
      description: "Revamp the company website with a fresh look and improved UX.",
      progress: 45,
      tasksCount: 12,
    },
    {
      id: 2,
      title: "Mobile App Launch",
      description: "Develop and release the mobile app on iOS and Android platforms.",
      progress: 70,
      tasksCount: 20,
    },
    {
      id: 3,
      title: "Marketing Campaign",
      description: "Plan and execute the fall marketing campaign across channels.",
      progress: 30,
      tasksCount: 8,
    },
  ]

  return (
    <PageLayout>
      <div className="flex justify-end mb-6">
        <Button variant="primary">Create New Project</Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            progress={project.progress}
            tasksCount={project.tasksCount}
          />
        ))}
      </div>
    </PageLayout>
  )
}