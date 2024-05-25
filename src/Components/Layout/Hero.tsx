import Right from '../Icons/Right';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className='mt-8 grid grid-cols-2'>
      <div className='py-12'>
        <h1 className='text-5xl font-bold'>
          Everything <br />
          is better <br />
          with a<span className='text-primary'>Pizza</span>
        </h1>
        <p className='my-6 text-sm text-gray-500'>
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className='flex gap-4 text-sm'>
          <button className=' flex items-center gap-2 rounded-full bg-primary px-8 py-2 uppercase text-white'>
            Order Now
            <Right className='w-6' />
          </button>
          <button className='flex gap-2 py-2 text-gray-600'>
            Learn More
            <Right className='w-6' />
          </button>
        </div>
      </div>
      <div className=' relative'>
        <Image
          src={'/pizza.png'}
          alt='pizza'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </section>
  );
}
