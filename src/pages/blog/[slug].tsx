import { GetStaticPaths, GetStaticProps } from 'next';
import { FaClock } from 'react-icons/fa';

import { getFileBySlugAndType, getFiles } from '@/lib/mdx/helpers';

import NextImage from '@/components/atomic/images/NextImage';
import CustomLink from '@/components/atomic/links/CustomLink';
import { Layout } from '@/components/layout/Layout';
import { useMdxComponent } from '@/components/mdx/MDXComponents';
import Seo from '@/components/Seo';

import { PostFrontMatter } from '@/types/frontmatter';

type PostPageProps = {
  frontmatter: PostFrontMatter;
  code: string;
};

export default function PostPage({ frontmatter, code }: PostPageProps) {
  const Component = useMdxComponent(code);

  return (
    <Layout>
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
        isBlog
        banner={frontmatter.displayImage} //TODO
        date={new Date(
          frontmatter.lastUpdated ?? frontmatter.publishedAt
        ).toISOString()}
      />

      <main>
        <section className='bg-bg py-20'>
          <div className='layout'>
            <NextImage
              className='w-full'
              src={frontmatter.displayImage}
              alt={frontmatter.title}
              width={1440}
              height={792}
            />

            <h1 className='mt-8 text-white'>{frontmatter.title}</h1>
            <div className='mt-2 flex items-center gap-1'>
              <FaClock className='inline-block text-white' />
              <p className='text-white'>{frontmatter.readingTime.text}</p>
            </div>
            <p className='my-4 text-sm text-white'>{frontmatter.description}</p>

            <div className='mt-5 w-full border-b border-white pt-4'></div>

            <section className='mt-8 text-white'>
              <article className='mdx projects prose mx-auto w-full transition-colors'>
                <Component></Component>
              </article>

              {/* <aside className='py-4'>
                <div className='sticky top-36'>
                  <TableOfContents
                    toc={toc}
                    minLevel={minLevel}
                    activeSection={activeSection}
                  />
                </div>
              </aside> */}
            </section>

            <div className='mt-10 mb-10 flex flex-col items-start gap-4 border-t border-white pt-8 md:flex-row-reverse md:justify-between'>
              <CustomLink
                className='text-white'
                href={`https:///src/contents/projects/${frontmatter.slug}.mdx`}
              >
                Edit this on GitHub
              </CustomLink>
              <CustomLink className='text-white' href='/projects'>
                ← Back to blogs
              </CustomLink>{' '}
              */
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('blog');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.['slug'] as string; //TODO 404
  const { code, frontmatter } = await getFileBySlugAndType(slug, 'blog');
  return {
    props: { frontmatter: frontmatter as PostFrontMatter, code },
  };
};
