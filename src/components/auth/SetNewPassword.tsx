'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

interface FormData {
  newPassword: string;
  confirmPassword: string;
}

export default function SetNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Set new password:', data);
    // Send new password to backend with token
  };

  return (
    <div className="mx-auto flex min-h-screen inter-font">
      {/* Left: Background Image with Blur Cover */}
      <div className="relative w-1/2 hidden md:block rounded-r-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      {/* Right: Form Section */}
      <div className="w-full md:w-1/2 flex items-center text-[#1B1F3A] justify-center p-6 flex-col">
        <h1 className="text-2xl font-bold md:text-[32px] text-center mb-6">Set New Password</h1>

        <div className="w-full max-w-xl bg-white p-8 shadow-xl rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <div className="relative">
                <input
                  id="newPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter new password"
                  {...register('newPassword', { required: 'New password is required' })}
                  className={`w-full px-3 py-4 border ${errors.newPassword ? 'border-red-500' : 'border-[#D9DCE1]'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.newPassword && <p className="text-sm text-red-600 mt-1">{errors.newPassword.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="Confirm new password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === watch('newPassword') || 'Passwords do not match'
                  })}
                  className={`w-full px-3 py-4 border ${errors.confirmPassword ? 'border-red-500' : 'border-[#D9DCE1]'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-sm text-red-600 mt-1">{errors.confirmPassword.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 px-4 bg-[#CBB677] hover:bg-yellow-700 text-white font-semibold rounded-md transition mb-2"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
