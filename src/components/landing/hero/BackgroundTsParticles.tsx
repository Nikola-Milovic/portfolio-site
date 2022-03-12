import React from 'react';
import Particles from 'react-tsparticles';

const BackgroundParticles = () => {
  return (
    <Particles
      id='tsparticles'
      width='100%'
      height='100%'
      className='particles-container'
      options={{
        fullScreen: true,
        background: {
          color: {
            value: '#0B0C10',
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'attract',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#66FCF1',
          },
          links: {
            color: '#66FCF1',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: true,
            speed: 1.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;
