import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Login = () => {
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Login Data:', data)
    login() // set isLoggedIn = true
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded p-6 w-80"
      >
        <div className='bg-amber-200 rounded-4xl mt-2 mb-2 p-2'>
          <h3 className='text-xl font-extrabold mb-auto mt-auto text-amber-600 text-center'>
            Store Managment System </h3>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required' })}
          className="border p-2 w-full mb-2 rounded"
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
          className="border p-2 w-full mb-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
         <footer className="text-center text-gray-500 text-sm mt-6 border-t pt-3">
        Developed by: <a href='https://mohsin-portfolio-ten.vercel.app/' className="font-semibold text-blue-600 hover:underline cursor-pointer">Ch. Mohsin Khan</a>
        <br />
        <span className="text-xs">Software Developer • 2025</span>
      </footer>
      </form>
     
    </div>
  )
}

export default Login
