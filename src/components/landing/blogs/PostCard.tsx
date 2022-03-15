//import { FaArrowRight } from 'react-icons/fa';

import { format } from 'date-fns';
import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import { FaClock } from 'react-icons/fa';

import clsxm from '@/lib/clsxm';

import CloudinaryImg from '@/components/atomic/images/CloudinaryImg';
import UnstyledLink from '@/components/atomic/links/UnstyledLink';

import { PostFrontMatter } from '@/types/frontmatter';

type BlogCardProps = {
  post: PostFrontMatter;
} & DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export const PostCard = ({ post }: BlogCardProps) => {
  return (
    <li
      className={clsxm(
        'post-card rounded-md bg-secondary shadow-md lg:rounded-lg'
      )}
    >
      <UnstyledLink
        className='flex h-full flex-col rounded-md'
        href={`/blog/${post.slug}`}
      >
        <div className='relative'>
          <CloudinaryImg
            className='pointer-events-none w-full overflow-hidden rounded-t-md lg:rounded-t-lg'
            publicId={post.displayImage}
            alt={'Image preview for post titled' + post.title}
            width={460}
            height={(460 * 3) / 5}
          />
          <div className='absolute bottom-0 mt-2 flex w-full flex-wrap justify-end gap-y-1 gap-x-2 px-4 py-2 text-sm text-white'>
            {post.keywords.map((keyword) => (
              <div
                tabIndex={-1}
                className='md:text-md rounded-md bg-green px-2 py-1 text-sm text-white shadow-md lg:text-sm lg:font-medium '
                key={keyword}
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>

        <div className='p-4'>
          <h3 className='mb-2 mt-0 leading-6 text-white'>{post.title}</h3>
          <div className='flex items-center gap-1'>
            <FaClock className='inline-block text-white' />
            <p className='text-white'>{post.readingTime.text}</p>
          </div>
          <p className='my-2 text-sm text-white '>
            <span className='font-bold text-white '>
              {format(
                new Date(post.lastUpdated ?? post.publishedAt),
                'MMMM dd, yyyy'
              )}
            </span>
          </p>
          <p className='text-sm text-white'>{post.description}</p>
        </div>
      </UnstyledLink>
    </li>
  );
};
