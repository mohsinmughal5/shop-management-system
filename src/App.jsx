// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { useAuth } from './context/AuthContext'
// import Sidebar from './components/Sidebar'
// import Header from './components/Header'
// import Dashboard from './pages/Dashboard'
// import Products from './pages/Products'
// import Sales from './pages/Sales'
// import Login from './pages/Login'
// import Footer from './components/Footer'

// const App = () => {
//   const { isLoggedIn } = useAuth()

//   return (
//     <Router>
//       {isLoggedIn ? (
//         <div className="flex">
//           <Sidebar />
//           <div className="flex-1 ml-64">
//             <Header />
//             <main className="mt-20 p-6 bg-gray-50 min-h-screen">
//               <Routes>
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/products" element={<Products />} />
//                 <Route path="/sales" element={<Sales />} />
//                 <Route path="*" element={<Navigate to="/dashboard" />} />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </div>
//       ) : (
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       )}
//     </Router>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Sales from './pages/Sales'
import Login from './pages/Login'
import ProtectedRoute from './components/layout/ProtectedRoute'
import InventoryDashboard from './pages/InventoryDashboard'

const App = () => {
  const { isLoggedIn } = useAuth()

  return (
    <Router>
      {isLoggedIn ? (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-64">
            <Header />
            <main className="mt-20 p-6 bg-gray-50 min-h-screen">
              <Routes>
                {/* Dashboard - all roles can access */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={['admin', 'sales', 'inventory']}>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                {/* Products - only Admin & Inventory Manager */}
                <Route
                  path="/products"
                  element={
                    <ProtectedRoute allowedRoles={['admin', 'inventory']}>
                      <Products />
                    </ProtectedRoute>
                  }
                />

                {/* Sales - only Admin & Sales */}
                <Route
                  path="/sales"
                  element={
                    <ProtectedRoute allowedRoles={['admin', 'sales']}>
                      <Sales />
                    </ProtectedRoute>
                  }
                />
                <Route
  path="/inventory"
  element={
    <ProtectedRoute allowedRoles={['admin', 'inventory']}>
      <InventoryDashboard />
    </ProtectedRoute>
  }
/>


                {/* Default route */}
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      )}
    </Router>
  )
}

export default App
