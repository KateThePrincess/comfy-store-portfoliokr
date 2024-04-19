import { NavLink } from 'react-router-dom';
import { BsGlobe2, BsLinkedin, BsGithub, BsBehance } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 footer py-4  bg-base-200 text-base-content border-base-300'>
      <div className='flex justify-between align-element w-[100%]'>
        <aside className='flex gap-3 items-center'>
          <NavLink
            to='/'
            className='hidden lg:flex text-4xl items-start font-bold text-secondary'
          >
            Comfy
          </NavLink>
          <p>
            ComfyStore Inc. <br />
            Best quality products since 1992
          </p>
        </aside>
        <nav className='md:place-self-center md:justify-self-end'>
          <div className='grid grid-flow-col gap-4'>
            <a href='https://portfolio-website-kr.netlify.app/'>
              <BsGlobe2 className='h-6 w-6 ' />
            </a>
            <a href='https://www.linkedin.com/in/katarzynarzonca/'>
              <BsLinkedin className='h-6 w-6 ' />
            </a>
            <a href='https://github.com/KateThePrincess'>
              <BsGithub className='h-6 w-6 ' />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
