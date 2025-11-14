import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import ProtectedRoute from './ProtectedRoute'

// pages
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import Sales from '../pages/Sales'
import Login from '../pages/Login'
import InventoryDashboard from '../pages/InventoryDashboard'
import ResetPassword from '../pages/ResetPassword'
import ChangePassword from '../pages/ChangePassword'

const AppRoutes = () => {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* PROTECTED */}
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={['admin', 'sales', 'inventory']}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />

        <Route
          path="products"
          element={
            <ProtectedRoute allowedRoles={['admin', 'inventory']}>
              <Products />
            </ProtectedRoute>
          }
        />

        <Route
          path="sales"
          element={
            <ProtectedRoute allowedRoles={['admin', 'sales']}>
              <Sales />
            </ProtectedRoute>
          }
        />

        <Route
          path="inventory"
          element={
            <ProtectedRoute allowedRoles={['admin', 'inventory']}>
              <InventoryDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="change-password" element={<ChangePassword />} />
      </Route>

      {/* DEFAULT REDIRECT */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default AppRoutes
