import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">🛍️ Store Management System</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/sales" className="hover:underline">Sales</Link>
          <Link to="/login" className="hover:underline">Logout</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
