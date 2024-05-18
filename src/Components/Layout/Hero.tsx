import Image from 'next/image';
import Right from '../Icons/Right';

export default function Hero() {
  return (
    <section className='grid grid-cols-2'>
      <div className='py-12'>
        <h1 className='text-5xl font-bold'>
          Everything <br />
          is better <br />
          with a<span className='text-primary'>Pizza</span>
        </h1>
        <p className='my-6 text-gray-500 text-sm'>
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className='flex gap-4 text-sm'>
          <button className=' bg-primary text-white px-8 py-2 rounded-full flex gap-2 uppercase items-center'>
            Order Now
            <Right className='w-6' />
          </button>
          <button className='flex gap-2 text-gray-600 py-2'>
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
