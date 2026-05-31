import React from 'react'

interface ProjectCardProps {
  title: string
  description: string
  progress: number
  tasksCount: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, progress, tasksCount }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
          />
        </div>
        <p className="text-gray-600 text-sm mt-1">{progress}% Complete</p>
      </div>
      <div className="text-gray-600 text-sm">
        Tasks: <span className="font-medium text-gray-800">{tasksCount}</span>
      </div>
    </div>
  )
}

export default ProjectCard