import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Home, Package, ShoppingCart, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const Sidebar = () => {
  const { logout, userRole } = useAuth()

  const baseMenu = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home size={18} /> },
  ]

  const roleMenus = {
    admin: [
      { name: 'Products', path: '/products', icon: <Package size={18} /> },
      { name: 'Sales', path: '/sales', icon: <ShoppingCart size={18} /> },
    ],
    sales: [
      { name: 'Sales', path: '/sales', icon: <ShoppingCart size={18} /> },
    ],
    inventory: [
      { name: 'Inventory Dashboard', path: '/inventory', icon: <Package size={18} /> },
      { name: 'Products', path: '/products', icon: <Package size={18} /> },
    ],
  }

  const menuItems = [...baseMenu, ...(roleMenus[userRole] || [])]

  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col fixed">
      <div className="text-2xl font-bold text-center py-6 border-b border-gray-700">
        {userRole === 'admin'
          ? 'Admin Panel'
          : userRole === 'inventory'
          ? 'Inventory Panel'
          : 'Sales Panel'}
      </div>

      <nav className="grow">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}   // <-- MUST be absolute
            end
            className={({ isActive }) =>
              `flex items-center px-6 py-3 hover:bg-gray-700 transition ${
                isActive ? 'bg-gray-700 font-semibold' : ''
              }`
            }
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-gray-700 py-4 text-center">
        <Link
          to="/change-password" // <-- fixed
          className="flex items-center justify-center w-full hover:text-red-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="12" cy="16" r="1"/>
            <rect x="3" y="10" width="18" height="12" rx="2"/>
            <path d="M7 10V7a5 5 0 0 1 10 0v3"/>
          </svg>
          <span className="ml-2">Change Password</span>
        </Link>
      </div>

      <div className="border-t border-gray-700 py-4 text-center">
        <button
          onClick={logout}
          className="flex items-center justify-center w-full hover:text-red-400"
        >
          <LogOut size={18} className="mr-2" /> Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
