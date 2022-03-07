import clsx from 'clsx';
import NextImage from 'next/image';
import * as React from 'react';

type StyledImageProps = {
  height: string | number;
  width: string | number;
  alt: string;
  url: string;
  className?: string;
  aspect?: {
    width: number;
    height: number;
  };
  mdx?: boolean;
} & React.ComponentPropsWithoutRef<'figure'>;

export default function StyledImage({
  height,
  width,
  alt,
  title,
  url,
  className,
  mdx = false,
  style,
  aspect,
  ...rest
}: StyledImageProps) {
  const aspectRatio = aspect ? aspect.height / aspect.width : undefined;

  return (
    <figure
      className={clsx(className, 'overflow-hidden shadow-sm dark:shadow-none', {
        'mx-auto w-full': mdx && width <= 800,
      })}
      style={{
        ...(mdx && width <= 800 ? { maxWidth: width } : {}),
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          paddingTop: aspectRatio
            ? `${aspectRatio * 100}%`
            : `${(+height / +width) * 100}%`,
        }}
        className='img'
      >
        <style jsx>{`
          .img::before {
            content: '';
            position: absolute;
            inset: 0;
            filter: blur(20px);
            z-index: 0;
            background-image: url(${url});
            background-position: center center;
            background-size: 100%;
          }
        `}</style>
        <div className='absolute top-0 left-0'>
          <NextImage
            width={width}
            height={height}
            src={url}
            alt={alt}
            title={title || alt}
          />
        </div>
      </div>
    </figure>
  );
}
