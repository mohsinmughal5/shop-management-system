// src/pages/ChangePassword.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Change Password:', data);
    alert('Password changed successfully (simulation)');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Change Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="password"
            placeholder="Old Password"
            {...register('oldPassword', { required: 'Old password is required' })}
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.oldPassword && (
            <p className="text-red-500 text-sm mb-2">{errors.oldPassword.message}</p>
          )}

          <input
            type="password"
            placeholder="New Password"
            {...register('newPassword', {
              required: 'New password is required',
              minLength: { value: 6, message: 'Min length is 6' },
            })}
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm mb-2">{errors.newPassword.message}</p>
          )}

          <input
            type="password"
            placeholder="Confirm New Password"
            {...register('confirmPassword', {
              required: 'Confirm password is required',
              validate: (value, { newPassword }) =>
                value === newPassword || 'Passwords do not match',
            })}
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mb-2">{errors.confirmPassword.message}</p>
          )}

          <button
            type="submit"
            className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;