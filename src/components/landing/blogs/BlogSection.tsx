import clsx from 'clsx';
import { FaArrowRight } from 'react-icons/fa';
import { InView } from 'react-intersection-observer';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/atomic/links/UnstyledLink';

import { PostCard } from './PostCard';
import { BottomBlogsDivider } from '../../atomic/dividers/BlogDividers';

import { PostFrontMatter } from '@/types/frontmatter';

type BlogSectionProps = {
  posts: PostFrontMatter[];
};

const BlogSection = ({ posts }: BlogSectionProps) => {
  return (
    <>
      <section id='blogs' className='md:min-h-700 relative w-full bg-bg py-20'>
        <BottomBlogsDivider />

        <div className='layout my-10 flex h-full flex-col p-4'>
          <InView triggerOnce threshold={0.8} rootMargin='-80px 0px'>
            {({ inView, ref }) => (
              <>
                <h1
                  ref={ref}
                  className={clsxm('section-title fade-slide-left mb-10', {
                    'in-view': inView,
                  })}
                >
                  Blog
                </h1>

                <ul
                  className={clsxm(
                    'mx-auto mt-4 grid max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:gap-10',
                    'fade-slide-bottom',
                    'delay-500 duration-700',
                    { 'in-view': inView }
                  )}
                >
                  {posts.map((post) => (
                    <PostCard key={post.slug} post={post}></PostCard>
                  ))}
                </ul>
              </>
            )}
          </InView>

          <InView triggerOnce delay={250} threshold={0.8}>
            {({ ref, inView }) => (
              <UnstyledLink
                href='/blog'
                aria-label='Go to page with all blog posts'
                ref={ref}
                className={clsx(
                  'see-more-button group border-secondary text-secondary transition-transform hover:bg-secondary hover:text-primary',
                  'fade-slide-left',
                  inView && 'in-view'
                )}
              >
                See more
                <FaArrowRight className='transition-transform group-hover:translate-x-2'></FaArrowRight>
              </UnstyledLink>
            )}
          </InView>
        </div>
      </section>

      <div id='seperator' className='h-[12rem] w-full'></div>
    </>
  );
};

export default BlogSection;
