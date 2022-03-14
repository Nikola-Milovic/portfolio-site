import loadable from '@loadable/component';
import clsx from 'clsx';
import { Fragment } from 'react';
import { InView } from 'react-intersection-observer';

import { AboutMeTopDivider } from '@/components/atomic/dividers/AboutMeDividers';
import { TextSwap } from '@/components/atomic/textTransition';

const TagSphere = loadable(
  () => import('@/components/atomic/reactTagSphere/index'),
  {
    fallback: <Fragment></Fragment>,
  }
);

export const AboutMe = () => {
  return (
    <section id='aboutme' className='relative w-full bg-bg py-10 lg:py-20'>
      <AboutMeTopDivider />

      <div className='layout flex h-full flex-col p-4 md:flex-row'>
        <div className='w-full p-2 text-white md:w-1/3'>
          <InView triggerOnce threshold={0.3} delay={200}>
            {({ ref, inView }) => {
              return (
                <div
                  ref={ref}
                  className={clsx(
                    'fade-slide-left mb-5 pb-1',
                    inView && 'in-view'
                  )}
                >
                  <h1 data-fade='0' className='section-title '>
                    About me
                  </h1>
                  <div className='-mr-2 w-20 border-b-4 border-primary'></div>
                </div>
              );
            }}
          </InView>

          <InView triggerOnce threshold={0.5} delay={450}>
            {({ ref, inView }) => (
              <p
                ref={ref}
                className={clsx(
                  'indent-4',
                  'fade-slide-left ',
                  '-translate-x-[70%] duration-[1500]',
                  inView && 'in-view'
                )}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                congue vitae porttitor ornare sed enim vitae scelerisque
                sagittis. Tincidunt pellentesque justo tempor, mauris. Pharetra
                donec odio varius nisi. Feugiat in tincidunt eu dictum sed
                metus. <br></br>
                <br></br>Aliquet et sit quis porttitor neque in. At amet massa
                in consectetur vulputate ipsum. Cursus odio et aenean aliquet
                vestibulum pharetra nisl. Malesuada tellus sit varius sit
                faucibus et aenean libero ultrices. Enim phasellus id purus
                platea vulputate. Est aene
              </p>
            )}
          </InView>

          <InView triggerOnce threshold={0.3} delay={200}>
            {({ ref, inView }) => (
              <TextSwap
                ref={ref}
                text='I am experienced with'
                interval={300}
                textClasses='font-semibold text-primary'
                containerClasses={clsx('fade-slide-left', inView && 'in-view')}
                texts={['Text1', 'Text2', 'text3']}
              ></TextSwap>
            )}
          </InView>
        </div>

        <InView
          triggerOnce
          className='m-auto w-full'
          threshold={0.3}
          delay={200}
        >
          {({ ref, inView }) => (
            <div
              className={clsx(
                'text-white md:m-auto',
                'fade-slide-right',
                inView && 'in-view'
              )}
              ref={ref}
            >
              <TagSphere
                texts={[
                  'This',
                  'is',
                  'TagSphere.',
                  'Do',
                  'you',
                  'like',
                  'like',
                  'like',
                  'like',
                  'like',
                  'like',
                  'it?',
                  'Glad',
                  'to',
                  'see',
                  'you',
                ]}
                keepRollingAfterMouseOut={true}
                maxSpeed={10}
                initialSpeed={5}
              ></TagSphere>
            </div>
          )}
        </InView>
      </div>
    </section>
  );
};
