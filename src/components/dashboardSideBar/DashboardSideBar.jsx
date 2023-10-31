import React from 'react'

const DashboardSideBar = () => {
  return (
    <nav className="w-64 bg-gray-900 h-full">
      <ul className="p-6 space-y-4">
        <li>
          <a href="/messages" className="text-white hover:text-blue-500">
            Messages
          </a>
        </li>
        <li>
          <a href="/properties" className="text-white hover:text-blue-500">
            Properties
          </a>
        </li>
        <li>
          <a href="/change-password" className="text-white hover:text-blue-500">
            Change Password
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default DashboardSideBar
