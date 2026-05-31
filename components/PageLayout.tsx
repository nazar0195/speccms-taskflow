import React, { ReactNode } from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'

type PageLayoutProps = {
  children: ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-gray-100 border-r overflow-auto">
          <Sidebar />
        </aside>
        <main className="flex-1 p-6 overflow-auto bg-white">{children}</main>
      </div>
    </div>
  )
}

export default PageLayout