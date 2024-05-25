import Hero from '@/Components/Layout/Hero';
import HomeMenu from '@/Components/Layout/HomeMenu';
import SectionHeader from '@/Components/Layout/SectionHeader';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className='my-16 text-center'>
        <SectionHeader
          mainHeading='Our story'
          subHeading='About us'
        />
        <div className='mx-auto mt-4 flex max-w-2xl flex-col gap-4 text-gray-500'>
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
      <section className='my-8 text-center'>
        <SectionHeader
          mainHeading='Don	&#8218;t hesitate'
          subHeading='Contact us'
        />
        <div className='mt-8'>
          <a
            href='tel:+912524243532'
            className='text-3xl text-blue-500 underline'
          >
            +91 2524243532
          </a>
        </div>
      </section>
    </>
  );
}
