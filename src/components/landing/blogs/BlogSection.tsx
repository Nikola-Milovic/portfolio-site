import { motion } from 'framer-motion';

import {
  fadeSlideY,
  whileInViewAnim,
} from '@/components/atomic/animations/animationProps';

import { PostCard } from './PostCard';
import { BottomBlogsDivider } from '../../atomic/dividers/BlogDividers';

import { PostFrontMatter } from '@/types/frontmatter';

type BlogSectionProps = {
  posts: PostFrontMatter[];
};

export const BlogSection = ({ posts }: BlogSectionProps) => {
  return (
    <>
      <section id='blogs' className='md:min-h-700 relative w-full bg-bg py-20'>
        <BottomBlogsDivider />

        <div className='layout my-10 flex h-full flex-col p-4'>
          <motion.h1
            {...whileInViewAnim}
            {...fadeSlideY(20)}
            className='section-title mb-10'
          >
            Blogs
          </motion.h1>

          <ul className='mx-auto mt-4 grid max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
            {posts.map((post) => (
              <PostCard
                {...whileInViewAnim}
                {...fadeSlideY(20)}
                key={post.slug}
                post={post}
              ></PostCard>
            ))}
          </ul>
        </div>
      </section>

      <div id='seperator' className='h-[24rem] w-full'></div>
    </>
  );
};
