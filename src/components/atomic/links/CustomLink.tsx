import clsx from 'clsx';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

export default function CustomLink({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'animated--underline animated--underline-primary custom-link inline-flex items-center font-medium',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary',
        'border-dark border-b border-primary',
        className
      )}
    >
      <span className=''>{children}</span>
    </UnstyledLink>
  );
}
