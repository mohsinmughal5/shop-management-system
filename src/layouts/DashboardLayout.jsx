import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Header />

        <main className="mt-20 p-6 bg-gray-50 min-h-screen">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout
