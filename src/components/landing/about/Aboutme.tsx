import { motion } from 'framer-motion';

import {
  fadeSlideX,
  staggerAnimParent,
} from '@/components/atomic/animations/animationProps';

import { AboutMeTopDivider } from '../../atomic/dividers/AboutMeDividers';
import TagSphere from '../../atomic/reactTagSphere';
import { TextSwap } from '../../atomic/textTransition';

export const AboutMe = () => {
  return (
    <section id='aboutme' className='relative w-full bg-bg py-10 lg:py-20'>
      <AboutMeTopDivider />

      <motion.div
        {...staggerAnimParent(0.3)}
        className='layout flex h-full flex-col p-4 md:flex-row'
      >
        <div className='w-full p-2 text-white md:w-1/3'>
          <div className='mb-5 pb-1'>
            <motion.h1 {...fadeSlideX(30)} className='section-title '>
              About me
            </motion.h1>
            <div className='-mr-2 w-20 border-b-4 border-primary'></div>
          </div>

          <motion.p {...fadeSlideX(20)} className='indent-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            congue vitae porttitor ornare sed enim vitae scelerisque sagittis.
            Tincidunt pellentesque justo tempor, mauris. Pharetra donec odio
            varius nisi. Feugiat in tincidunt eu dictum sed metus. <br></br>
            <br></br>Aliquet et sit quis porttitor neque in. At amet massa in
            consectetur vulputate ipsum. Cursus odio et aenean aliquet
            vestibulum pharetra nisl. Malesuada tellus sit varius sit faucibus
            et aenean libero ultrices. Enim phasellus id purus platea vulputate.
            Est aene
          </motion.p>

          <TextSwap
            {...fadeSlideX(20)}
            text='I am experienced with'
            interval={300}
            textClasses='font-semibold text-primary'
            texts={['Text1', 'Text2', 'text3']}
          ></TextSwap>
        </div>

        <TagSphere
          anim={fadeSlideX(30, true, undefined, 0.6)}
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
          className='m-auto text-white'
        ></TagSphere>
      </motion.div>
    </section>
  );
};
