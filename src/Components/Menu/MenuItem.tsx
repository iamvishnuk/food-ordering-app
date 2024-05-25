type Props = {};

export default function MenuItem({}: Props) {
  return (
    <div className='rounded-lg bg-gray-200 p-4 text-center transition-all hover:cursor-pointer hover:bg-white hover:shadow-2xl hover:shadow-black/50'>
      <div className='text-center'>
        <img
          className='mx-auto block max-h-36 max-w-36'
          src='/pizza.png'
          alt='pizza'
        />
      </div>
      <h4 className='my-2 text-xl font-semibold'>Pepperoni</h4>
      <p className='text-sm text-gray-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        consequuntur quas vitae non, iste sunt.
      </p>
      <button className='mt-4 rounded-full bg-primary px-8 py-2 text-white'>
        Add to cart
      </button>
    </div>
  );
}
