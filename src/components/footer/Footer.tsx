import UnderlineLink from '../atomic/links/UnderlineLink';

export const Footer = () => {
  return (
    <footer className='absolute bottom-2 right-1/2 translate-x-1/2 text-gray-700'>
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink href='#'>Nikola Milovic</UnderlineLink>
    </footer>
  );
};
