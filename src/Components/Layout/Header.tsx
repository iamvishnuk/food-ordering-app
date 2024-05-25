import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='flex items-center justify-between'>
        <nav className='flex items-center gap-8 font-semibold text-gray-500'>
          <Link
            href=''
            className='text-2xl font-semibold text-primary'
          >
            ST PIZZA
          </Link>
          <Link href=''>Home</Link>
          <Link href=''>Menu</Link>
          <Link href=''>About</Link>
          <Link href=''>Contact</Link>
        </nav>
        <nav className='flex items-center gap-4 text-gray-500'>
          <Link href='/login'>Login</Link>
          <Link
            href='/register'
            className='rounded-full bg-primary px-8 py-2 text-white'
          >
            Register
          </Link>
        </nav>
      </header>
    </>
  );
}
