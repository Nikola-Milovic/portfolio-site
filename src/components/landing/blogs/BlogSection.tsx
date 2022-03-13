import { FaArrowRight } from 'react-icons/fa';
import { InView } from 'react-intersection-observer';

import UnstyledLink from '@/components/atomic/links/UnstyledLink';

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
          <InView triggerOnce rootMargin='0px -20%'>
            <h1 className='section-title mb-10'>Blogs</h1>
          </InView>

          <ul className='mx-auto mt-4 grid max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
            {posts.map((post, index) => (
              <InView
                delay={index * 0.1}
                key={post.slug}
                triggerOnce
                rootMargin='10% 0px'
              >
                <PostCard post={post}></PostCard>
              </InView>
            ))}
          </ul>

          <InView triggerOnce rootMargin='0px -20%' delay={100}>
            <UnstyledLink
              href='/projects'
              className='see-more-button group border-secondary text-secondary transition-transform  hover:scale-[1.02] hover:bg-secondary hover:text-primary'
            >
              See more
              <FaArrowRight className='transform transition group-hover:translate-x-2'></FaArrowRight>
            </UnstyledLink>
          </InView>
        </div>
      </section>

      <div id='seperator' className='h-[24rem] w-full'></div>
    </>
  );
};
