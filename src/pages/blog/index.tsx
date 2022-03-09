import { getPosts } from '@/lib/mdx/helpers';

import { PostCard } from '@/components/landing/blogs/PostCard';
import { Layout } from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { PostFrontMatter } from '@/types/frontmatter';

type BlogPageProps = {
  posts: PostFrontMatter[];
};

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <Layout>
      {/* TODO seo */}
      <Seo />
      {/* <Seo templateTitle='Home' /> */}
      <main className='flex h-full w-full bg-bg-dark py-20'>
        <div className='layout my-20'>
          <h1 className='text-5xl font-bold text-white'>Blog</h1>
          <h3 className='my-2 text-lg font-medium text-white'>
            Writing about the things I&apos;ve learned over the years, mostly
            programming and fitness.
          </h3>

          <ul className='mx-auto mt-4 grid w-full max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post}></PostCard>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
