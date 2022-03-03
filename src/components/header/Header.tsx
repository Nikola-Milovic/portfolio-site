import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import UnstyledLink from '../atomic/links/UnstyledLink';

export const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: '768px' });

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <nav className='fixed inset-0 z-[9999] h-16 w-screen border-b-4 border-primary bg-bg-dark md:border-b-0'>
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
          <UnstyledLink href='#home' className='nav-links'>
            home
          </UnstyledLink>
          <UnstyledLink href='#aboutme' className='nav-links'>
            about me
          </UnstyledLink>
          <UnstyledLink href='#projects' className='nav-links'>
            projects
          </UnstyledLink>
          <UnstyledLink
            href='#home'
            className='nav-links nav-links--underline-secondary text-lg font-medium text-secondary'
          >
            Contact
          </UnstyledLink>
        </div>
      </div>

      <div
        className={` ${
          !expanded && 'hidden'
        } z-10 flex w-screen flex-col items-center justify-between space-y-4 border-b-4 border-primary bg-bg-dark py-6 text-white md:hidden`}
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
