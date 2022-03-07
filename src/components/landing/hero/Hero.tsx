import clsx from 'clsx';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';

import { BackgroundParticles } from './BackgroundTsParticles';
import UnstyledLink from '../../atomic/links/UnstyledLink';

export const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-main fade-in-start mb-20 flex flex-col justify-center'
    >
      <div className='layout flex h-full flex-col items-center justify-center'>
        <p className='hero-title my-2 mx-3 text-center font-black uppercase text-white sm:my-3 md:my-5 lg:my-10'>
          Nikola Milovic
        </p>
        {/* <p className='hero-subtitle mt-3 font-medium uppercase text-secondary md:mt-6'>
          I am a fullstack engineer |
        </p> */}

        <Typewriter
          options={{
            wrapperClassName:
              'font-medium uppercase text-primary md:text-semibold md:text-xl',
            cursorClassName: 'text-primary',
            strings: [`I'm a Full-stack Developer`, `I'm an avid programmer`],
            autoStart: true,
            loop: true,
            delay: 120,
            deleteSpeed: 150,
          }}
        />

        <UnstyledLink
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
