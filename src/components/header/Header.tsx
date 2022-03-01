import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: '768px' });

  return (
    <nav className='fixed inset-0 z-10 h-16 w-screen border-b-4 border-primary bg-bg-dark md:border-b-0'>
      <div className='header-container relative flex h-full w-full flex-row items-center justify-between px-6 text-white md:px-10'>
        <div className='flex items-center gap-1'>
          <p>English</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
        <p className='absolute left-1/2 -translate-x-1/2 font-semibold uppercase md:hidden'>
          Nikola Milovic
        </p>
        <div className='md:hidden' onClick={() => setExpanded(!expanded)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>

        <div
          className={`${
            !isDesktop && 'hidden'
          } flex flex-col items-center gap-6 md:flex-row`}
        >
          <a className='nav-links'>home</a>
          <a className='nav-links'>about me</a>
          <a className='nav-links'>projects</a>
          <a className='nav-links nav-links--underline-secondary text-lg font-medium text-secondary'>
            Contact
          </a>
        </div>
      </div>

      <div
        className={` ${
          !expanded && 'hidden'
        } flex w-screen flex-col items-center justify-between space-y-4 border-b-4 border-primary bg-bg-dark py-6 text-white md:hidden`}
      >
        <a className='nav-links -mt-7'>home</a>
        <a className='nav-links'>about me</a>
        <a className='nav-links'>projects</a>
        <a className='nav-links nav-links--underline-secondary text-lg font-medium text-secondary'>
          Contact
        </a>
      </div>
    </nav>
  );
};
