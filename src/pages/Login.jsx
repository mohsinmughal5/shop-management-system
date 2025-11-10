// src/pages/Login.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { users } from '../config/user';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      const user = users.find(
        (u) => u.username === data.username && u.password === data.password
      );

      if (user) {
        login(user.role);
        toast.success('Login successful!');
        navigate(
          user.role === 'admin'
            ? '/dashboard'
            : user.role === 'inventory'
            ? '/inventory'
            : '/sales'
        );
      } else {
        toast.error('Invalid username or password');
      }

      setLoading(false);
    }, 1000); // Simulate loading delay
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/login-bg.jpg')" }}
    >
      <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-10 w-full md:w-1/2 lg:w-1/3 h-full flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-80 md:w-96">
          <div className="bg-amber-200 rounded-xl mb-4 p-3 shadow-sm">
            <h3 className="text-xl font-extrabold text-amber-700 text-center">
              Store Management System
            </h3>
          </div>

          <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
            Login
          </h2>

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            {...register('username', { required: 'Username is required' })}
            className="border p-2 w-full mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mb-2">{errors.username.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Min length is 6' },
            })}
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {/* Reset Password Link */}
          <p className="text-sm text-center mt-3">
            <Link to="/reset-password" className="text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </p>

          {/* Footer */}
          <footer className="text-center text-gray-500 text-sm mt-6 border-t pt-3">
            Developed by:{' '}
            <a
              href="https://mohsin-portfolio-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Mohat
            </a>
            < br/>
            <span className="text-xs"> Software Developer • 2025</span>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default Login;