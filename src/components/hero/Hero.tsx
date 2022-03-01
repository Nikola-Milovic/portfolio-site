import React from 'react';

import { BackgroundParticles } from './BackgroundTsParticles';

export const Hero = () => {
  return (
    <section className='relative mt-16 h-3/4 '>
      <div className='layout flex h-full w-full flex-col items-center justify-center'>
        <p className='hero-title text-center font-black uppercase text-white'>
          Nikola Milovic
        </p>
        <p className='mt-3 font-medium uppercase text-secondary md:mt-6'>
          I am a fullstack engineer |
        </p>
        <BackgroundParticles></BackgroundParticles>
      </div>
    </section>
  );
};
