type Props = {};

export default function MenuItem({}: Props) {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:cursor-pointer transition-all hover:shadow-2xl hover:shadow-black/50'>
      <div className='text-center'>
        <img
          className='max-h-36 max-w-36 block mx-auto'
          src='/pizza.png'
          alt='pizza'
        />
      </div>
      <h4 className='font-semibold my-2 text-xl'>Pepperoni</h4>
      <p className='text-gray-500 text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        consequuntur quas vitae non, iste sunt.
      </p>
      <button className='bg-primary text-white rounded-full px-8 py-2 mt-4'>
        Add to cart
      </button>
    </div>
  );
}
