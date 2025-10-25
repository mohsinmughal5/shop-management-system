import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-500 shadow-md p-4 flex justify-between items-center fixed z-10 left-64 right-0 top-0"
    >
      <h1 className="text-xl font-bold text-white">Store Management System</h1>
      <div className="flex items-center space-x-4">
        <p className="text-white font-medium">Welcome, Admin</p>
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="rounded-full w-10 h-10 border"
        />
      </div>
    </header>
  )
}

export default Header
