import { IconType } from 'react-icons';

type SocialIconProps = {
  icon: IconType;
  text: string;
  url: string;
};

export const SocialIcon = ({ text, url, ...props }: SocialIconProps) => {
  return (
    <a
      href={url}
      className='flex items-center gap-2 text-white hover:scale-105 md:max-w-fit'
    >
      <props.icon className='h-6 w-6 md:h-8 md:w-8'></props.icon>
      <p>{text}</p>
    </a>
  );
};
