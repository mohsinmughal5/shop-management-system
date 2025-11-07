// src/pages/ResetPassword.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Reset Password Request:', data);
    alert('Password reset link sent to your email (simulation)');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: 'Email is required' })}
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;