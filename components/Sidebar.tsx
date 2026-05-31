import Link from 'next/link'
import { FC } from 'react'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Projects', href: '/projects' },
  { label: 'Tasks', href: '/tasks' },
  { label: 'Team', href: '/team' },
  { label: 'Activity', href: '/activity' },
  { label: 'Comments', href: '/comments' },
]

const quickLinks: NavItem[] = [
  { label: 'New Project', href: '/projects/new' },
  { label: 'New Task', href: '/tasks/new' },
]

const Sidebar: FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-gray-100 h-screen p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-4">TaskFlow</h1>
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded hover:bg-gray-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-auto">
        <h2 className="text-lg font-medium mb-2">Quick Links</h2>
        <ul className="space-y-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-3 py-2 rounded bg-gray-700 hover:bg-gray-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar