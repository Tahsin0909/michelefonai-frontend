'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Login data:', data);
  };

  return (
    <div className="mx-auto flex min-h-screen inter-font">
      {/* Left: Background Image with Blur Cover */}
      <div className="relative w-1/2 hidden md:block rounded-r-2xl overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        />
        {/* Black blur overlay */}
        <div className="absolute inset-0 bg-black/80 -sm" />
      </div>

      {/* Right: Login Form */}
      <div className="w-full md:w-1/2 flex items-center text-[#1B1F3A] justify-center p-6 flex-col">
        {/* Headings outside the box */}
        <h1 className="text-2xl font-bold md:text-[32px] text-center text-[#1B1F3A] mb-1">Login</h1>
        <h2 className="text-xl font-semibold md:text-2xl mb-6 text-center text-[#1B1F3A]">Sign in to your account</h2>

        <div className="w-full max-w-xl bg-white p-8 shadow-xl rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="jane.doe@gmail.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={`w-full px-3 py-4 border ${errors.email ? 'border-red-500' : 'border-[#D9DCE1]'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600`}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm text-yellow-600 hover:underline">Forgot your password?</a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  {...register('password', { required: 'Password is required' })}
                  className={`w-full text-[#1B1F3A] px-3 py-4 border ${errors.password ? 'border-red-500' : 'border-[#D9DCE1]'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
            </div>

            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                {...register('rememberMe')}
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-4 bg-[#CBB677] hover:bg-yellow-700 text-white font-semibold rounded-md transition mb-4"
            >
              Continue
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="#" className="font-medium text-yellow-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
}
