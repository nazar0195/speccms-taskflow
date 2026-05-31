import React from 'react'

type Status = 'Pending' | 'In Progress' | 'Completed'
type Priority = 'Low' | 'Medium' | 'High'

interface Assignee {
  name: string
  avatarUrl: string
}

interface TaskCardProps {
  title: string
  assignee: Assignee
  dueDate: string | Date
  status: Status
  priority: Priority
}

const statusStyles: Record<Status, string> = {
  Pending: 'bg-gray-200 text-gray-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  Completed: 'bg-green-100 text-green-800',
}

const priorityStyles: Record<Priority, string> = {
  Low: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  High: 'bg-red-100 text-red-800',
}

const formatDate = (date: string | Date) => {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

const TaskCard: React.FC<TaskCardProps> = ({ title, assignee, dueDate, status, priority }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-4 bg-white">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className={`px-2 py-1 text-xs font-medium rounded ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
      <div className="mt-4 flex items-center">
        <img src={assignee.avatarUrl} alt={assignee.name} className="w-8 h-8 rounded-full" />
        <span className="ml-2 text-gray-700">{assignee.name}</span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">Due: {formatDate(dueDate)}</div>
        <span className={`px-2 py-1 text-xs font-medium rounded ${priorityStyles[priority]}`}>
          {priority} Priority
        </span>
      </div>
    </div>
  )
}

export default TaskCard