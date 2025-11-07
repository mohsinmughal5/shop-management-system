import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Login Data:', data)
    login(data.role)
  }

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/public/login-bg.jpg')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-10 w-full md:w-1/2 lg:w-1/3 h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-80 md:w-96"
        >
          <div className="bg-amber-200 rounded-xl mb-4 p-3 shadow-sm">
            <h3 className="text-xl font-extrabold text-amber-700 text-center">
              Store Management System
            </h3>
          </div>

          <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: 'Email is required' })}
            className="border p-2 w-full mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Min length is 6' },
            })}
            className="border p-2 w-full mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
          )}

          <select
            {...register('role', { required: 'Role is required' })}
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="sales">Sales</option>
            <option value="inventory">Inventory Manager</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mb-2">{errors.role.message}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
          <p className="text-sm text-center mt-2">
            <a href="/reset-password" className="text-blue-500 hover:underline">
                  Forgot your password?
  </a>
</p>


          <footer className="text-center text-gray-500 text-sm mt-6 border-t pt-3">
            Developed by:{' '}
            <a
              href="https://mohsin-portfolio-ten.vercel.app/"
              className="font-semibold text-blue-600 hover:underline cursor-pointer"
            >
              Ch. Mohsin Khan
            </a>
            <br />
            <span className="text-xs">Software Developer • 2025</span>
          </footer>
        </form>
      </div>
    </div>
  )
}

export default Login
