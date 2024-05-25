import MenuItem from '../Menu/MenuItem';

import SectionHeader from './SectionHeader';

import Image from 'next/image';

type Props = {};

export default function HomeMenu({}: Props) {
  return (
    <div className='w-full'>
      <div className='relative'>
        <div className='absolute -top-[4.5rem] left-0 -z-10'>
          <Image
            src={'/sallad1.png'}
            alt='sallad'
            width={109}
            height={189}
          />
        </div>
        <div className='absolute -top-36 right-0 -z-10'>
          <Image
            src={'/sallad2.png'}
            alt='sallad'
            width={107}
            height={195}
          />
        </div>
      </div>
      <div className='text-center'>
        <SectionHeader
          mainHeading='check out'
          subHeading='Menu'
        />
      </div>
      <div className='grid grid-cols-3 gap-12 p-3'>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}
