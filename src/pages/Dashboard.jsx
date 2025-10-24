import React from 'react'

const Dashboard = () => {
  const summary = [
    { title: 'Total Products', value: 120, color: 'bg-blue-500' },
    { title: 'Total Sales', value: 340, color: 'bg-green-500' },
    { title: 'Revenue (PKR)', value: '850,000', color: 'bg-yellow-500' },
    { title: 'Staff Members', value: 8, color: 'bg-purple-500' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summary.map((item, index) => (
          <div
            key={index}
            className={`${item.color} text-white p-6 rounded-lg shadow-md text-center`}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>New sale recorded by Ali (₨5,000)</li>
          <li>Product "Notebook" added to inventory</li>
          <li>Staff member Sara updated stock levels</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
