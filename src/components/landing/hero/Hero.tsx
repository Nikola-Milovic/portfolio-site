import loadable from '@loadable/component';
import clsx from 'clsx';
import React, { Fragment } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { InView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';

const BackgroundParticles = loadable(() => import('./BackgroundTsParticles'), {
  fallback: <Fragment></Fragment>,
});

import UnstyledLink from '../../atomic/links/UnstyledLink';

type HeroProps = {
  isLoaded: boolean;
};

export const Hero = ({ isLoaded }: HeroProps) => {
  return (
    <section
      id='home'
      className={clsx(
        'min-h-main fade-in-start mb-20 flex flex-col justify-center',
        isLoaded && 'fade-in-start'
      )}
    >
      <div className='layout flex h-full flex-col items-center justify-center'>
        <InView triggerOnce delay={500}>
          {({ ref, inView }) => (
            <>
              <p
                ref={ref}
                className={clsx(
                  'hero-title  my-2 mx-3 text-center font-black uppercase text-white sm:my-3 md:my-5 lg:my-10',
                  'fade-slide-bottom translate-y-[60px]',
                  { 'in-view': inView }
                )}
              >
                Nikola Milovic
              </p>

              <Typewriter
                options={{
                  wrapperClassName: clsx(
                    'font-medium uppercase text-primary md:text-semibold md:text-xl',
                    'fade-slide-bottom',
                    { 'in-view': inView }
                  ),
                  cursorClassName: 'text-primary',
                  strings: [
                    `I'm a Full-stack Developer`,
                    `I'm an avid programmer`,
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 120,
                  deleteSpeed: 150,
                }}
              />
            </>
          )}
        </InView>

        <UnstyledLink
          aria-label='Go to next section'
          href='#aboutme'
          className={clsx(
            'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
            'cursor-pointer rounded-md transition-colors',
            'hover:text-primary-300 focus-visible:text-primary-300'
          )}
        >
          <FiChevronDown className='h-8 w-8 animate-bounce text-white md:h-10 md:w-10' />
        </UnstyledLink>
      </div>
      <div className='md:min-h-500 inset -z-1 pointer-events-none absolute flex h-full w-full flex-col items-center justify-center'>
        <BackgroundParticles></BackgroundParticles>
      </div>
    </section>
  );
};
