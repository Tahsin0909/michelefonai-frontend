'use client';

import { useForm } from 'react-hook-form';

interface FormData {
  email: string;
}

export default function ForgetPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      email: '',
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Forgot password request:', data);
    // You can trigger email reset logic here
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
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      {/* Right: Form Section */}
      <div className="w-full md:w-1/2 flex items-center text-[#1B1F3A] justify-center p-6 flex-col">
        {/* Headings outside the form box */}
        <h1 className="text-2xl font-bold md:text-[32px] text-center text-[#1B1F3A] mb-1">Forgot Password</h1>
       

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

            <button
              type="submit"
              className="w-full py-4 px-4 bg-[#CBB677] hover:bg-yellow-700 text-white font-semibold rounded-md transition mb-4"
            >
              Reset your password
            </button>
          </form>
        </div>

   
      </div>
    </div>
  );
}
