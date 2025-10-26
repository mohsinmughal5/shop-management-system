// import React from 'react'
// import { Package, AlertTriangle, PlusCircle } from 'lucide-react'

// const InventoryDashboard = () => {
//   // Example dummy data — replace later with API or context data
//   const inventoryStats = {
//     totalProducts: 120,
//     lowStock: 8,
//     outOfStock: 3,
//   }

//   const lowStockItems = [
//     { id: 1, name: 'Printer Ink Cartridge', stock: 2 },
//     { id: 2, name: 'A4 Paper Pack', stock: 5 },
//     { id: 3, name: 'Stapler Pins', stock: 1 },
//   ]

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">Inventory Overview</h1>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Total Products</p>
//             <h2 className="text-3xl font-bold text-gray-800">{inventoryStats.totalProducts}</h2>
//           </div>
//           <Package size={36} className="text-blue-500" />
//         </div>

//         <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Low Stock Items</p>
//             <h2 className="text-3xl font-bold text-amber-600">{inventoryStats.lowStock}</h2>
//           </div>
//           <AlertTriangle size={36} className="text-amber-500" />
//         </div>

//         <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Out of Stock</p>
//             <h2 className="text-3xl font-bold text-red-600">{inventoryStats.outOfStock}</h2>
//           </div>
//           <AlertTriangle size={36} className="text-red-500" />
//         </div>
//       </div>

//       {/* Low Stock Table */}
//       <div className="bg-white rounded-2xl shadow p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold text-gray-700">Low Stock Alerts</h2>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
//             <PlusCircle size={18} className="mr-2" /> Add New Product
//           </button>
//         </div>

//         <table className="w-full text-sm text-left text-gray-600">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700">
//               <th className="px-4 py-2">Product</th>
//               <th className="px-4 py-2">Stock</th>
//               <th className="px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {lowStockItems.map((item) => (
//               <tr key={item.id} className="border-t">
//                 <td className="px-4 py-2">{item.name}</td>
//                 <td className="px-4 py-2">{item.stock}</td>
//                 <td className="px-4 py-2">
//                   <span
//                     className={`px-2 py-1 text-xs rounded-full ${
//                       item.stock <= 2
//                         ? 'bg-red-100 text-red-700'
//                         : 'bg-amber-100 text-amber-700'
//                     }`}
//                   >
//                     {item.stock <= 2 ? 'Critical' : 'Low'}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default InventoryDashboard

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Package, AlertTriangle, PlusCircle, X } from 'lucide-react'

const InventoryDashboard = () => {
  // Example inventory summary
  const inventoryStats = {
    totalProducts: 120,
    lowStock: 8,
    outOfStock: 3,
  }

  const [lowStockItems, setLowStockItems] = useState([
    { id: 1, name: 'Printer Ink Cartridge', stock: 2 },
    { id: 2, name: 'A4 Paper Pack', stock: 5 },
    { id: 3, name: 'Stapler Pins', stock: 1 },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const newProduct = {
      id: lowStockItems.length + 1,
      name: data.productName,
      stock: parseInt(data.stock),
    }

    setLowStockItems((prev) => [...prev, newProduct])
    reset()
    setIsModalOpen(false)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Inventory Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Products</p>
            <h2 className="text-3xl font-bold text-gray-800">{inventoryStats.totalProducts}</h2>
          </div>
          <Package size={36} className="text-blue-500" />
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Low Stock Items</p>
            <h2 className="text-3xl font-bold text-amber-600">{inventoryStats.lowStock}</h2>
          </div>
          <AlertTriangle size={36} className="text-amber-500" />
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Out of Stock</p>
            <h2 className="text-3xl font-bold text-red-600">{inventoryStats.outOfStock}</h2>
          </div>
          <AlertTriangle size={36} className="text-red-500" />
        </div>
      </div>

      {/* Low Stock Table */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Low Stock Alerts</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
          >
            <PlusCircle size={18} className="mr-2" /> Add New Product
          </button>
        </div>

        <table className="w-full text-sm text-left text-gray-600">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {lowStockItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.stock}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.stock <= 2
                        ? 'bg-red-100 text-red-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {item.stock <= 2 ? 'Critical' : 'Low'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  {...register('productName', { required: 'Product name is required' })}
                  className="border p-2 w-full rounded"
                />
                {errors.productName && (
                  <p className="text-red-500 text-sm mt-1">{errors.productName.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  {...register('stock', {
                    required: 'Stock is required',
                    min: { value: 1, message: 'Must be at least 1' },
                  })}
                  className="border p-2 w-full rounded"
                />
                {errors.stock && (
                  <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>
                )}
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded mr-2 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default InventoryDashboard
