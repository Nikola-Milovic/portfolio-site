import { AnimatePresence, motion } from 'framer-motion';
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
    <header className='fixed inset-0 z-[9999] h-16 w-screen bg-bg-dark md:border-b-0'>
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

      <AnimatePresence>
        {isExpanded && (
          <motion.nav
            className=' w-full bg-bg-dark'
            initial={{ height: 0 }}
            animate={{
              height: 'auto',
              transition: { delay: 0.1, duration: 0.4 },
            }}
            exit={{
              height: 0,
              transition: { delay: 0.3, duration: 0.4 },
            }}
          >
            <motion.div
              className='z-10 flex flex-col items-center justify-between space-y-4 pt-3 pb-6 text-white md:hidden'
              initial='collapsed'
              animate='expanded'
              exit='collapsed'
              variants={{
                expanded: {
                  transition: {
                    delayChildren: 0.4,
                    staggerChildren: 0.2,
                    staggerDirection: 1,
                  },
                },
                collapsed: {
                  transition: {
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              <UnstyledLink
                variants={{
                  expanded: {
                    opacity: 1,
                  },
                  collapsed: {
                    opacity: 0,
                  },
                }}
                href='/#home'
                className='nav-links'
              >
                home
              </UnstyledLink>
              <UnstyledLink
                variants={{
                  expanded: {
                    opacity: 1,
                  },
                  collapsed: {
                    opacity: 0,
                  },
                }}
                href='/blog'
                className='nav-links'
              >
                blog
              </UnstyledLink>
              <UnstyledLink
                variants={{
                  expanded: {
                    opacity: 1,
                  },
                  collapsed: {
                    opacity: 0,
                  },
                }}
                href='/projects'
                className='nav-links'
              >
                projects
              </UnstyledLink>
              <UnstyledLink
                variants={{
                  expanded: {
                    opacity: 1,
                  },
                  collapsed: {
                    opacity: 0,
                  },
                }}
                href='#footer'
                className='nav-links nav-links--underline-secondary text-lg font-medium text-secondary'
              >
                Contact
              </UnstyledLink>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
