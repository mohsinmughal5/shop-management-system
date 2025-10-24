import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-60 bg-gray-100 p-4 border-r border-gray-300 min-h-screen">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li><Link to="/" className="block hover:bg-blue-100 rounded p-2">Dashboard</Link></li>
        <li><Link to="/products" className="block hover:bg-blue-100 rounded p-2">Products</Link></li>
        <li><Link to="/sales" className="block hover:bg-blue-100 rounded p-2">Sales</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
