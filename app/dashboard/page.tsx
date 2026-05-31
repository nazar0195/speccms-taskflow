import { FC } from "react"
import PageLayout from "@/components/PageLayout"
import MetricSummary from "@/components/MetricSummary"
import Button from "@/components/Button"
import ProjectCard from "@/components/ProjectCard"
import TaskCard from "@/components/TaskCard"

type Project = {
  id: number
  title: string
  description: string
  progress: number
  tasksCount: number
}

type Task = {
  id: number
  title: string
  assignee: {
    name: string
    avatarUrl: string
  }
  dueDate: string
  status: string
  priority: string
}

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "Initial phase of the alpha release",
    progress: 70,
    tasksCount: 24,
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Marketing and user research",
    progress: 45,
    tasksCount: 15,
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Final testing and bug fixes",
    progress: 90,
    tasksCount: 5,
  },
]

const sampleTasks: Task[] = [
  {
    id: 1,
    title: "Design user onboarding flow",
    assignee: { name: "Jane Doe", avatarUrl: "/avatars/jane.png" },
    dueDate: "2023-08-15",
    status: "In Progress",
    priority: "High",
  },
  {
    id: 2,
    title: "Set up database backups",
    assignee: { name: "John Smith", avatarUrl: "/avatars/john.png" },
    dueDate: "2023-08-18",
    status: "Pending",
    priority: "Medium",
  },
]

export default function Dashboard() {
  return (
    <PageLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricSummary
            totalProjects={sampleProjects.length}
            totalTasks={sampleProjects.reduce((sum, p) => sum + p.tasksCount, 0)}
            completedTasks={120}
            pendingTasks={45}
            upcomingDeadlines={8}
          />
        </section>
        <section className="flex flex-wrap gap-4 mb-8">
          <Button variant="primary">Create Project</Button>
          <Button variant="primary">View All Teams</Button>
          <Button variant="primary">New Task</Button>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                progress={project.progress}
                tasksCount={project.tasksCount}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Tasks</h2>
          <div className="space-y-4">
            {sampleTasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                assignee={task.assignee}
                dueDate={task.dueDate}
                status={task.status}
                priority={task.priority}
              />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}