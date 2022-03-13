import { PropsWithChildren } from 'react';
import InView from 'react-intersection-observer';

type AOSProps = {
  direction?: 'y' | 'x';
  reverse?: boolean;
  threshold?: number;
} & PropsWithChildren<HTMLElement>;

export const AOS = ({ threshold, children }: AOSProps) => {
  return <InView threshold={threshold}>{children}</InView>;
};
