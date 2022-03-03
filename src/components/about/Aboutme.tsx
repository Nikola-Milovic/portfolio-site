import TagSphere from '../atomic/reactTagSphere';

export const AboutMe = () => {
  return (
    <section className='w-full bg-bg-dark'>
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
        </div>

        <TagSphere
          keepRollingAfterMouseOut={true}
          maxSpeed={10}
          initialSpeed={5}
          className='mx-auto text-white'
        ></TagSphere>
      </div>
    </section>
  );
};
