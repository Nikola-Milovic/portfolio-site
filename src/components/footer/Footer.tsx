import { FooterTopDivider } from '../atomic/dividers/FooterDividers';

export const Footer = () => {
  return (
    <footer
      id='projects'
      className='md:min-h-700 relative mt-40 w-full bg-bg pt-40'
    >
      <FooterTopDivider />

      <div className='layout flex h-full flex-col p-4'></div>
    </footer>
  );
};
