// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { Home, Package, ShoppingCart, LogOut } from 'lucide-react'
// import { useAuth } from '../context/AuthContext'

// const Sidebar = () => {
//   const { logout } = useAuth()

//   const menuItems = [
//     { name: 'Dashboard', path: '/dashboard', icon: <Home size={18} /> },
//     { name: 'Products', path: '/products', icon: <Package size={18} /> },
//     { name: 'Sales', path: '/sales', icon: <ShoppingCart size={18} /> },
//   ]

//   return (
//     <div className="bg-gray-800 text-white h-screen w-64 flex flex-col fixed">
//       <div className="text-2xl font-bold text-center py-6 border-b border-gray-700">
//         Store Admin
//       </div>

//       <nav className="grow">
//         {menuItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             end
//             className={({ isActive }) =>
//               `flex items-center px-6 py-3 hover:bg-gray-700 transition ${
//                 isActive ? 'bg-gray-700 font-semibold' : ''
//               }`
//             }
//           >
//             <span className="mr-3">{item.icon}</span>
//             {item.name}
//           </NavLink>
//         ))}
//       </nav>

//       <div className="border-t border-gray-700 py-4 text-center">
//         <button
//           onClick={logout}
//           className="flex items-center justify-center w-full hover:text-red-400"
//         >
//           <LogOut size={18} className="mr-2" /> Logout
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Sidebar

import React from 'react'
import { NavLink } from 'react-router-dom'
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
    // inventory: [
    //   { name: 'Products', path: '/products', icon: <Package size={18} /> },
    // ],
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
            to={item.path}
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
