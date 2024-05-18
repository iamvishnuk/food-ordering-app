import React from 'react';

type Props = { mainHeading: string; subHeading: string };

export default function SectionHeader({ mainHeading, subHeading }: Props) {
  return (
    <>
      <h2 className='text-gray-600 uppercase font-semibold text-xl leading-4'>
        {mainHeading}
      </h2>
      <h2 className='text-primary font-bold text-4xl italic'>{subHeading}</h2>
    </>
  );
}
