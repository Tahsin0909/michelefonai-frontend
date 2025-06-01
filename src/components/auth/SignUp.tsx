'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Register data:', data);
    // Send to API or handle register logic here
  };

  return (
    <div className="mx-auto flex min-h-screen inter-font">
      {/* Left: Background Image with Black Blur */}
      <div className="relative w-1/2 hidden md:block rounded-r-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      {/* Right: Register Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 flex-col text-[#1B1F3A]">
        <h1 className="text-2xl font-bold md:text-[32px] text-center mb-6">Create an Account</h1>

        <div className="w-full max-w-xl bg-white p-8 shadow-xl rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register('name', { required: 'Full name is required' })}
                className={`w-full px-3 py-4 border ${errors.name ? 'border-red-500' : 'border-[#D9DCE1]'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600`}
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className={`w-full px-3 py-4 border ${errors.email ? 'border-red-500' : 'border-[#D9DCE1]'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600`}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Minimum 6 characters' },
                  })}
                  className={`w-full px-3 py-4 border ${errors.password ? 'border-red-500' : 'border-[#D9DCE1]'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600`}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-4 bg-[#CBB677] hover:bg-yellow-700 text-white font-semibold rounded-md transition mb-2"
            >
              Register
            </button>
          </form>
        </div>
            <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="#" className="font-medium text-yellow-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
