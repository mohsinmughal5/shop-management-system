import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Home, Package, ShoppingCart, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { sidebarMenu } from "../../config/sidebarMenu";

const iconMap = {
  Home: <Home size={18} />,
  Package: <Package size={18} />,
  ShoppingCart: <ShoppingCart size={18} />,
};

const Sidebar = () => {
  const { logout, userRole } = useAuth();

  // Get menu items based on role
  const menuItems = sidebarMenu[userRole] || [];

  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col fixed">
      {/* Title */}
      <div className="text-2xl font-bold text-center py-6 border-b border-gray-700">
        {userRole === "admin"
          ? "Admin Panel"
          : userRole === "inventory"
          ? "Inventory Panel"
          : "Sales Panel"}
      </div>

      {/* Menu */}
      <nav className="grow">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center px-6 py-3 hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700 font-semibold" : ""
              }`
            }
          >
            <span className="mr-3">
              {iconMap[item.icon]} {/* Dynamic icon */}
            </span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Change Password */}
      <div className="border-t border-gray-700 py-4 text-center">
        <Link
          to="/change-password"
          className="flex items-center justify-center w-full hover:text-red-400"
        >
          Change Password
        </Link>
      </div>

      {/* Logout */}
      <div className="border-t border-gray-700 py-4 text-center">
        <button
          onClick={logout}
          className="flex items-center justify-center w-full hover:text-red-400"
        >
          <LogOut size={18} className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
