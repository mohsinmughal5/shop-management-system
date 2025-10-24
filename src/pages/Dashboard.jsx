import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p className="text-3xl font-bold mt-2">₨ 95,000</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Customers</h3>
          <p className="text-3xl font-bold mt-2">56</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
