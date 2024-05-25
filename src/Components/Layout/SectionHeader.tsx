import React from 'react';

type Props = { mainHeading: string; subHeading: string };

export default function SectionHeader({ mainHeading, subHeading }: Props) {
  return (
    <>
      <h2 className='text-xl font-semibold uppercase leading-4 text-gray-600'>
        {mainHeading}
      </h2>
      <h2 className='text-4xl font-bold italic text-primary'>{subHeading}</h2>
    </>
  );
}
