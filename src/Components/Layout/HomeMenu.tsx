import Image from 'next/image';
import MenuItem from '../Menu/MenuItem';
import SectionHeader from './SectionHeader';

type Props = {};

export default function HomeMenu({}: Props) {
  return (
    <div className='w-full'>
      <div className='relative'>
        <div className='absolute left-0 -top-[4.5rem] -z-10'>
          <Image
            src={'/sallad1.png'}
            alt='sallad'
            width={109}
            height={189}
          />
        </div>
        <div className='absolute right-0 -top-36 -z-10'>
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
