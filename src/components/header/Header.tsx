import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
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
    <header className='fixed inset-0 z-[9999] h-16 w-screen border-b-2 border-primary bg-bg-dark md:border-b-0'>
      <div className='header-container relative flex h-full w-full flex-row items-center justify-between px-6 text-white md:px-10'>
        <div className='flex items-center gap-1'>
          <p>English</p>

          <FiChevronDown className='h-4 w-4' />
        </div>
        <p className='absolute left-1/2 -translate-x-1/2 font-semibold uppercase md:hidden'>
          Nikola Milovic
        </p>
        <div className='md:hidden' onClick={() => setExpanded(!expanded)}>
          <GiHamburgerMenu className='h-6 w-6' />
        </div>

        <nav
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
        </nav>
      </div>

      <nav
        className={` ${
          !expanded && 'hidden'
        } z-10 flex w-screen flex-col items-center justify-between space-y-4 border-b-2 border-primary bg-bg-dark py-6 text-white md:hidden`}
      >
        <a className='nav-links -mt-7'>home</a>
        <a className='nav-links'>about me</a>
        <a className='nav-links'>projects</a>
        <a className='nav-links nav-links--underline-secondary text-lg font-medium text-secondary'>
          Contact
        </a>
      </nav>
    </header>
  );
};
