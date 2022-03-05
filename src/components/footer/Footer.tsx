import { FaGithub, FaTwitter } from 'react-icons/fa';

import { FooterTopDivider } from '../atomic/dividers/FooterDividers';
import { SocialIcon } from '../atomic/social/SocialIcon';

export const Footer = () => {
  return (
    <>
      <div id='seperator' className='h-[24rem] w-full md:h-[36rem]'></div>

      <footer
        id='projects'
        className='md:min-h-700 relative z-10 w-full bg-bg pt-10 md:pt-20'
      >
        <FooterTopDivider />

        <div className='layout mb-20 flex h-full flex-col p-4 md:flex-row md:justify-around'>
          <div id='socials' className='mx-auto mb-10 text-white md:m-0'>
            <div className='mb-5 pb-1'>
              <p className='section-title'>Socials</p>
              <div className='-mr-2 w-20 border-b-4 border-primary'></div>
            </div>
            <div className='ml-5 flex flex-col gap-4'>
              <p className='-ml-2 font-semibold'>
                Can&apos;t get enough of me?
              </p>
              <SocialIcon
                icon={FaGithub}
                text='github/Nikola-Milovic'
                url='https://github.com/Nikola-Milovic'
              ></SocialIcon>
              <SocialIcon
                icon={FaTwitter}
                text='@NikolaMilovic5'
                url='https://twitter.com/NikolaMilovic5'
              ></SocialIcon>
            </div>
          </div>
          <div id='extendedAboutme' className='mx-auto mt-10 max-w-sm  md:m-0'>
            <p className='indent-4 text-white'>
              {` Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes`}
              <br></br> <br></br>
              {`from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.`}
              <br></br> <br></br>
              {`from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.`}
            </p>
          </div>

          <p className='absolute left-1/2 bottom-2 mt-20 w-full -translate-x-1/2 text-center text-white'>
            Made with {'<3'} by Nikola Milovic, 2022-{new Date().getFullYear()}.
          </p>
        </div>
      </footer>
    </>
  );
};
