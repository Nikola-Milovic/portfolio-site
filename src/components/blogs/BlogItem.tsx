//import { FaArrowRight } from 'react-icons/fa';

import { format } from 'date-fns';
import { ComponentPropsWithoutRef } from 'react';

import NextImage from '../atomic/images/NextImage';
import UnstyledLink from '../atomic/links/UnstyledLink';

import { BlogPreview } from '@/types/blogPreview';

type BlogProps = {
  blog: BlogPreview;
} & ComponentPropsWithoutRef<'li'>;

export const BlogItem = ({ blog, onClick }: BlogProps) => {
  return (
    <li
      className='w-full scale-100 rounded-md bg-secondary shadow-xl hover:scale-[1.02] hover:shadow-primary lg:rounded-lg'
      onClick={onClick}
    >
      <UnstyledLink
        className='flex h-full flex-col rounded-md'
        href={`/blog/${blog.id}`}
      >
        <div className='relative'>
          <NextImage
            className='pointer-events-none w-full overflow-hidden rounded-t-md lg:rounded-t-lg'
            src={blog.displayImage}
            alt={'Image preview for blog titled' + blog.title}
            width={1200}
            height={(1200 * 3) / 5}
          />
          <div className='absolute bottom-0 mt-2 flex w-full flex-wrap justify-end gap-y-1 gap-x-2 px-4 py-2 text-sm text-white'>
            {blog.keywords.map((keyword) => (
              <div
                tabIndex={-1}
                className='rounded-md bg-green px-2 py-1 text-lg font-semibold text-white shadow-md '
                key={keyword}
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>

        <div className='p-4'>
          <h4 className='text-white '>{blog.title}</h4>
          <p className='mt-4 mb-2 text-sm text-white '>
            <span className='font-bold text-white '>
              {format(
                new Date(blog.lastUpdated ?? blog.publishedAt),
                'MMMM dd, yyyy'
              )}
            </span>
          </p>
          <p className='text-sm text-white'>{blog.description}</p>
        </div>
      </UnstyledLink>
    </li>
  );
};
