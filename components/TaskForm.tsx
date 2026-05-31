"use client";
import React, { useState } from 'react';

type Task = {
  title: string;
  assignee: string;
  dueDate: string;
  status: string;
  priority: string;
};

type TaskFormProps = {
  initialData?: Task;
  onSubmit: (task: Task) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [assignee, setAssignee] = useState(initialData?.assignee || '');
  const [dueDate, setDueDate] = useState(initialData?.dueDate || '');
  const [status, setStatus] = useState(initialData?.status || 'To Do');
  const [priority, setPriority] = useState(initialData?.priority || 'Medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, assignee, dueDate, status, priority });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Assignee</label>
        <input
          type="text"
          value={assignee}
          onChange={e => setAssignee(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Priority</label>
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;