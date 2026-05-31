import React from 'react'

interface TeamMemberCardProps {
  avatarUrl: string
  name: string
  role: string
  email: string
  phone?: string
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ avatarUrl, name, role, email, phone }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
      <img src={avatarUrl} alt={`${name} avatar`} className="w-16 h-16 rounded-full object-cover" />
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <div>
            <span className="font-medium text-gray-700">Email:</span>{' '}
            <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
              {email}
            </a>
          </div>
          {phone && (
            <div>
              <span className="font-medium text-gray-700">Phone:</span>{' '}
              <a href={`tel:${phone}`} className="text-blue-500 hover:underline">
                {phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard