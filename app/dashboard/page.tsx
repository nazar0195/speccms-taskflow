import PageLayout from "@/components/PageLayout"
import Button from "@/components/Button"
import ProjectCard from "@/components/ProjectCard"
import TaskCard from "@/components/TaskCard"
import { FC } from "react"

interface Project {
  id: number
  title: string
  description: string
  progress: number
  tasksCount: number
}

interface Task {
  id: number
  title: string
  assignee: string
  dueDate: string
  status: string
  priority: string
}

const projectsData: Project[] = [
  { id: 1, title: "Project Alpha", description: "Design and develop Alpha features", progress: 75, tasksCount: 24 },
  { id: 2, title: "Project Beta", description: "Test Beta modules", progress: 50, tasksCount: 12 },
  { id: 3, title: "Project Gamma", description: "Deploy Gamma release", progress: 30, tasksCount: 8 },
]

const upcomingTasksData: Task[] = [
  { id: 1, title: "Finalize UI Mockups", assignee: "Jane Doe", dueDate: "2024-07-10", status: "Pending", priority: "High" },
  { id: 2, title: "Write Unit Tests", assignee: "John Smith", dueDate: "2024-07-12", status: "In Progress", priority: "Medium" },
  { id: 3, title: "Prepare Release Notes", assignee: "Alice Johnson", dueDate: "2024-07-15", status: "Pending", priority: "Low" },
]

export default function Dashboard(): JSX.Element {
  return (
    <PageLayout>
      <div className="p-6 space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <div className="flex space-x-4">
            <Button variant="primary">Create Project</Button>
            <Button variant="primary">View All Teams</Button>
            <Button variant="primary">New Task</Button>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Projects Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map(project => (
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
          <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
          <div className="space-y-4">
            {upcomingTasksData.map(task => (
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
