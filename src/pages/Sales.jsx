import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Sales = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm()

  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [billItems, setBillItems] = useState([])

  // ===== NEW =====
  // Fetch products from dummy API (https://fakestoreapi.com/products)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Error fetching products:', err)
      }
    }
    fetchProducts()
  }, [])
  // ===== END NEW =====

  // ===== NEW =====
  // Live filtering based on search input
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts([])
    } else {
      const results = products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredProducts(results)
    }
  }, [searchTerm, products])
  // ===== END NEW =====

  const handleProductSelect = (product) => {
    setValue('productName', product.title)
    setValue('price', product.price)
    setFilteredProducts([])
    setSearchTerm(product.title)
  }

  const onSubmit = (data) => {
    const { productName, quantity, price, paymentMethod } = data
    const subtotal = Number(price) * Number(quantity)
    const newItem = { productName, quantity, price, subtotal, paymentMethod }

    setBillItems([...billItems, newItem])
    reset({ productName, price, quantity: '', paymentMethod: '' })
  }

  const totalAmount = billItems.reduce((acc, item) => acc + item.subtotal, 0)

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Sales Management</h2>

        {/* ===========================================================
            SEARCH SECTION
            =========================================================== */}

        {/* ===== OLD ===== */}
        {/*
        No search feature existed previously.
        User manually entered product name below.
        */}
        {/* ===== NEW ===== */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {filteredProducts.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 rounded w-full mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {product.title} —{' '}
                  <span className="text-gray-500">${product.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ===========================================================
            FORM SECTION
            =========================================================== */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* ===== OLD ===== */}
          {/*
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              {...register('productName', {
                required: 'Product name is required',
              })}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.productName && (
              <p className="text-red-500 text-sm">
                {errors.productName.message}
              </p>
            )}
          </div>
          */}
          {/* ===== NEW ===== */}
          <div>
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              {...register('productName', { required: 'Product name is required' })}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
            {errors.productName && (
              <p className="text-red-500 text-sm">{errors.productName.message}</p>
            )}
          </div>

          {/* ===== OLD ===== */}
          {/*
          <div>
            <label className="block text-sm font-medium mb-1">
              Quantity Sold
            </label>
            <input
              type="number"
              placeholder="Enter quantity"
              {...register('quantity', {
                required: 'Quantity is required',
                min: { value: 1, message: 'Quantity must be at least 1' },
              })}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          */}
          {/* ===== NEW ===== */}
          <div>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              {...register('quantity', {
                required: 'Quantity is required',
                min: { value: 1, message: 'Minimum 1 item' },
              })}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity.message}</p>
            )}
          </div>

          {/* ===== OLD ===== */}
          {/*
          <div>
            <label className="block text-sm font-medium mb-1">
              Price per Unit (PKR)
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="Enter price"
              {...register('price', {
                required: 'Price is required',
                min: { value: 1, message: 'Price must be greater than 0' },
              })}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          */}
          {/* ===== NEW ===== */}
          <div>
            <label className="block text-sm font-medium mb-1">Price (PKR)</label>
            <input
              type="number"
              {...register('price', { required: 'Price is required' })}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </div>

          {/* ===== OLD ===== */}
          {/*
          <div>
            <label className="block text-sm font-medium mb-1">
              Payment Method
            </label>
            <select
              {...register('paymentMethod', {
                required: 'Select a payment method',
              })}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Method</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="online">Online</option>
            </select>
          </div>
          */}
          {/* ===== NEW ===== */}
          <div>
            <label className="block text-sm font-medium mb-1">Payment Method</label>
            <select
              {...register('paymentMethod', { required: 'Select payment method' })}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Method</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="online">Online</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>
            )}
          </div>

          {/* ===== OLD ===== */}
          {/*
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Record Sale
          </button>
          */}
          {/* ===== NEW ===== */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Add to Bill
          </button>
        </form>

        {/* ===========================================================
            BILL SUMMARY SECTION
            =========================================================== */}

        {/* ===== OLD ===== */}
        {/*
        Old version did not include bill table or total calculation.
        It only logged a single sale and reset form.
        */}
        {/* ===== NEW ===== */}
        {billItems.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Bill Summary</h3>
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Product</th>
                  <th className="p-2 border">Qty</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Subtotal</th>
                  <th className="p-2 border">Payment</th>
                </tr>
              </thead>
              <tbody>
                {billItems.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2">{item.productName}</td>
                    <td className="border p-2">{item.quantity}</td>
                    <td className="border p-2">{item.price}</td>
                    <td className="border p-2">{item.subtotal}</td>
                    <td className="border p-2">{item.paymentMethod}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-right font-bold text-lg mt-3">
              Total: PKR {totalAmount.toFixed(2)}
            </div>

            <button
              onClick={() => setBillItems([])}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Clear Bill
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sales
