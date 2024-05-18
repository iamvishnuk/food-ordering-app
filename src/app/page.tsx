import Header from '@/Components/Layout/Header';
import Hero from '@/Components/Layout/Hero';
import HomeMenu from '@/Components/Layout/HomeMenu';
import SectionHeader from '@/Components/Layout/SectionHeader';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeader
          mainHeading='Our story'
          subHeading='About us'
        />
        <div className='max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            dolor porro. Quia laboriosam vel voluptatum explicabo. Deserunt nam
            incidunt at, esse fugiat doloribus iure perferendis asperiores
            explicabo veniam eum dicta sit libero inventore? Doloremque, rerum
            ipsum consequuntur laborum laboriosam cumque, cum, veritatis unde
            omnis rem odit numquam maxime deleniti pariatur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            dolor porro. Quia laboriosam vel voluptatum explicabo. Deserunt nam
            incidunt at, esse fugiat doloribus iure perferendis asperiores
            explicabo veniam eum dicta sit libero inventore? Doloremque, rerum
            ipsum consequuntur laborum laboriosam cumque, cum, veritatis unde
            omnis rem odit numquam maxime deleniti pariatur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt
            nulla tempora assumenda rerum quisquam nostrum ipsam? Aliquam,
            adipisci aut enim dolore officiis accusamus officia.
          </p>
        </div>
      </section>
      <section className='text-center my-8'>
        <SectionHeader
          mainHeading='Don	&#8218;t hesitate'
          subHeading='Contact us'
        />
        <div className='mt-8'>
          <a
            href='tel:+912524243532'
            className='text-3xl underline text-blue-500'
          >
            +91 2524243532
          </a>
        </div>
      </section>
      <footer className='border-t p-8 text-center text-gray-500 mt-16'>
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
