import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isLoggedIn, userRole } = useAuth()

  // 1️⃣ If not logged in → redirect to login
  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  }

  // 2️⃣ If role not allowed → show "Unauthorized"
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600">You do not have permission to view this page.</p>
        </div>
      </div>
    )
  }

  // 3️⃣ Otherwise → show the requested page
  return children
}

export default ProtectedRoute
