import bed from '../assets/bed.svg';
const About = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-10'>
      <main className='px-8 py-10 w-[100%] md:rounded-full'>
        <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
          <h1 className='text-4xl font-bold leading-none sm:text-6xl'>
            We love
          </h1>
          {/* <div className='rounded-full bg-neutral shadow p-5 text-4xl sm:text-6xl'>
          <div className='p-5'>
          <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
            comfy
          </div>
          </div>
        </div> */}
          <span className='text-4xl sm:text-6xl font-bold  rounded-full text-secondary'>
            comfy
          </span>
        </div>
        <p className='mt-8 text-lg leading-8 max-w-2xl mx-auto text-center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quia
          nulla praesentium doloribus iusto. Libero quia illo blanditiis
          perspiciatis beatae accusamus fuga odio, velit non neque, distinctio
          commodi esse a.
        </p>
      </main>
      <img src={bed} alt='bed' className='w-[50%]' />
    </section>
  );
};
export default About;
