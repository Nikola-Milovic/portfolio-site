import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

const PrimaryLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center',
          'text-primary-600 hover:text-primary-500 font-medium',
          'focus-visible:ring-primary-500 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default PrimaryLink;
