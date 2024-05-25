'use client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner8 } from 'react-icons/im';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(8)
});

type RegisterSchemaType = z.infer<typeof registerSchema>;

type Props = {};

export default function RegisterPage({}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post('api/register', data);
      if (response.status === 200) {
        setIsLoading(false);
      }
    } catch (error) {}
  };
  return (
    <section className='mt-8'>
      <h1 className='mb-4 text-center text-4xl text-primary'>Register</h1>
      <form
        className='mx-auto block max-w-xs'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='mb-2'>
          <label
            className='text-sm'
            htmlFor='email'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='email'
            {...register('email')}
          />
          {errors.email && (
            <span className='text-xs text-red-600'>{errors.email.message}</span>
          )}
        </div>

        <div className='mb-2'>
          <label
            className='text-sm'
            htmlFor='password'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            placeholder='password'
            {...register('password')}
          />
          {errors.password && (
            <span className='text-xs text-red-600'>
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type='submit'
          className='mt-4 flex items-center justify-center gap-2'
        >
          Register {isLoading && <ImSpinner8 className='animate-spin' />}
        </button>
        <div className='my-4 text-center text-gray-500'>
          or login with provider
        </div>
        <button className='flex items-center justify-center gap-2'>
          <Image
            src={'/google.png'}
            alt=''
            width={24}
            height={24}
          />
          Login with google
        </button>
        <div className='mt-4 text-center text-gray-500'>
          Existing account{' '}
          <Link
            className='underline hover:text-primary'
            href={'/login'}
          >
            Login here
          </Link>
        </div>
      </form>
    </section>
  );
}
