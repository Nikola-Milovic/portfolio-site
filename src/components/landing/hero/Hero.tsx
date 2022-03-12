import loadable from '@loadable/component';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { Fragment } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';

import {
  fadeSlideY,
  staggerAnimParent,
} from '@/components/atomic/animations/animationProps';

const BackgroundParticles = loadable(() => import('./BackgroundTsParticles'), {
  fallback: <Fragment></Fragment>,
});

import UnstyledLink from '../../atomic/links/UnstyledLink';

export const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-main fade-in-start mb-20 flex flex-col justify-center'
    >
      <motion.div
        {...staggerAnimParent(1)}
        className='layout flex h-full flex-col items-center justify-center'
      >
        <motion.p
          {...fadeSlideY(60)}
          className='hero-title my-2 mx-3 text-center font-black uppercase text-white sm:my-3 md:my-5 lg:my-10'
        >
          Nikola Milovic
        </motion.p>

        <motion.div {...fadeSlideY(40)}>
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
        </motion.div>

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
      </motion.div>
      <div className='md:min-h-500 inset -z-1 pointer-events-none absolute flex h-full w-full flex-col items-center justify-center'>
        <BackgroundParticles></BackgroundParticles>
      </div>
    </section>
  );
};
