import { Squash as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';

import UnstyledLink from '../../atomic/links/UnstyledLink';

export const Header = () => {
  const [isExpanded, setExpanded] = useState(false);

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
    <header className='fixed inset-0 z-[9999] h-16 w-screen border-b-2 border-primary bg-bg-dark shadow-md shadow-primary md:border-b-0'>
      <div className='header-container relative flex h-full w-full flex-row items-center justify-end  px-6 text-white md:px-10'>
        <p className='absolute left-1/2 -translate-x-1/2 font-semibold uppercase md:hidden'>
          Nikola Milovic
        </p>
        <div className='md:hidden' onClick={() => setExpanded(!isExpanded)}>
          <Hamburger size={24} toggled={isExpanded} toggle={setExpanded} />
        </div>

        <nav className='desktop-nav'>
          <UnstyledLink href='/#home' className='nav-links'>
            home
          </UnstyledLink>
          <UnstyledLink href='/blog' className='nav-links'>
            blog
          </UnstyledLink>
          <UnstyledLink href='/projects' className='nav-links'>
            projects
          </UnstyledLink>
          <UnstyledLink
            href='#footer'
            className='nav-links nav-links--underline-secondary text-lg font-medium text-secondary'
          >
            Contact
          </UnstyledLink>
        </nav>
      </div>

      <nav
        className={` ${
          !isExpanded && 'hidden'
        } z-10 flex w-screen flex-col items-center justify-between space-y-4 border-b-2 border-primary bg-bg-dark py-6 text-white md:hidden`}
      >
        <UnstyledLink href='/#home' className='nav-links'>
          home
        </UnstyledLink>
        <UnstyledLink href='/blog' className='nav-links'>
          blog
        </UnstyledLink>
        <UnstyledLink href='/projects' className='nav-links'>
          projects
        </UnstyledLink>
        <UnstyledLink
          href='#footer'
          className='nav-links nav-links--underline-secondary text-lg font-medium text-secondary'
        >
          Contact
        </UnstyledLink>
      </nav>
    </header>
  );
};
