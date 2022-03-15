import clsx from 'clsx';
import * as React from 'react';
import { Tooltip as TippyTooltip, TooltipProps } from 'react-tippy';

type TooltipTextProps = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  spanClassName?: string;
  withUnderline?: boolean;
} & TooltipProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

export default function Tooltip({
  content,
  children,
  className,
  spanClassName,
  withUnderline = false,
  ...rest
}: TooltipTextProps) {
  return (
    <TippyTooltip
      trigger='mouseenter'
      interactive
      html={
        <div
          className={clsx(
            className,
            'inline-block rounded-md bg-secondary p-2 font-medium text-white shadow-lg'
          )}
        >
          {content}
        </div>
      }
      {...rest}
    >
      {withUnderline ? (
        <span
          className={clsx(spanClassName, 'underline')}
          style={{ textDecorationStyle: 'dotted' }}
        >
          {children}
        </span>
      ) : (
        <>{children}</>
      )}
    </TippyTooltip>
  );
}
