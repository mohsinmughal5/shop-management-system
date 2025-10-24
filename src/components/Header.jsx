import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full z-10 ml-64">
      <h1 className="text-xl font-bold">Store Management System</h1>
      <div className="flex items-center space-x-4">
        <p className="text-gray-700 font-medium">Welcome, Admin</p>
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
