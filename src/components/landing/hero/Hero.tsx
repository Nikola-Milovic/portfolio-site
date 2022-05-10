import clsx from 'clsx';
import dynamic from 'next/dynamic';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';

const BackgroundParticles = dynamic(() => import('./BackgroundTsParticles'));

import UnstyledLink from '../../atomic/links/UnstyledLink';

type HeroProps = {
  isLoaded: boolean;
};

export const Hero = ({ isLoaded }: HeroProps) => {
  return (
    <section
      id='home'
      className={clsx(
        'min-h-main mb-20 flex flex-col justify-center opacity-0 transition-opacity duration-500',
        isLoaded && 'opacity-100'
      )}
    >
      <div className='layout flex h-full flex-col items-center justify-center'>
        <p className='hero-title  my-2 mx-3 text-center font-black uppercase text-white sm:my-3 md:my-5 lg:my-10'>
          Nikola Milovic
        </p>

        <Typewriter
          options={{
            wrapperClassName:
              'font-medium uppercase text-primary md:text-semibold md:text-xl',

            cursorClassName: 'text-primary',
            strings: [`Placeholder text`],
            autoStart: true,
            loop: true,
            delay: 120,
            deleteSpeed: 150,
          }}
        />

        <div className='md:min-h-500 inset -z-1 pointer-events-none absolute flex h-full w-full flex-col items-center justify-center'>
          <BackgroundParticles></BackgroundParticles>
        </div>

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
    </section>
  );
};
