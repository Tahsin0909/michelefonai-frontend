'use client';

import { useForm } from 'react-hook-form';

interface OTPForm {
  otp: string;
}

export default function EmailVerification() {
  const { register, handleSubmit, formState: { errors } } = useForm<OTPForm>({
    defaultValues: {
      otp: '',
    },
  });

  const onSubmit = (data: OTPForm) => {
    console.log('OTP submitted:', data);
    // handle OTP verification logic
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

      {/* Right: OTP Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 flex-col text-[#1B1F3A]">
        <h1 className="text-2xl font-bold md:text-[28px] text-center mb-6">Email Verification</h1>

        <div className="w-full max-w-sm bg-white p-6 shadow-xl rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="text-left">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                OTP
              </label>
              <input
                id="otp"
                type="password"
                maxLength={6}
                placeholder="Enter your 6-digit code"
                {...register('otp', { required: 'OTP is required' })}
                className={`w-full px-3 py-3 border ${errors.otp ? 'border-red-500' : 'border-[#D9DCE1]'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600`}
              />
              {errors.otp && <p className="text-sm text-red-600 mt-1">{errors.otp.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#CBB677] hover:bg-yellow-700 text-white font-semibold rounded-md transition"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
