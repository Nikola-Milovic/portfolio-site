import TagSphere from '../atomic/reactTagSphere';
import { TextSwap } from '../atomic/textTransition';

export const AboutMe = () => {
  return (
    <section id='aboutme' className='relative w-full bg-bg'>
      <div className='aboutme-top-divider'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>

      <div className='layout flex h-full flex-col p-4 md:flex-row'>
        <div className='w-full p-2 text-white md:w-1/3'>
          <div className='mb-5 pb-1'>
            <p className='text-3xl font-bold'>About me</p>
            <div className='-mr-2 w-20 border-b-4 border-primary'></div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            congue vitae porttitor ornare sed enim vitae scelerisque sagittis.
            Tincidunt pellentesque justo tempor, mauris. Pharetra donec odio
            varius nisi. Feugiat in tincidunt eu dictum sed metus. <br></br>
            <br></br>Aliquet et sit quis porttitor neque in. At amet massa in
            consectetur vulputate ipsum. Cursus odio et aenean aliquet
            vestibulum pharetra nisl. Malesuada tellus sit varius sit faucibus
            et aenean libero ultrices. Enim phasellus id purus platea vulputate.
            Est aene
          </p>

          <div className='my-7 flex flex-row items-center gap-2 text-xl'>
            <p>I am proficient in {'  '} </p>
            <TextSwap
              interval={300}
              textClasses='font-semibold text-primary'
              texts={['Text1', 'Text2', 'text3']}
            ></TextSwap>
          </div>
        </div>

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
          className='m-auto text-white'
        ></TagSphere>
      </div>
    </section>
  );
};
