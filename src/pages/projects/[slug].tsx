import { GetStaticPaths, GetStaticProps } from 'next';
import { FaGithub } from 'react-icons/fa';

import { getFileBySlugAndType, getFiles } from '@/lib/mdx/helpers';

import NextImage from '@/components/atomic/images/NextImage';
import CustomLink from '@/components/atomic/links/CustomLink';
import { Layout } from '@/components/layout/Layout';
import { useMdxComponent } from '@/components/mdx/MDXComponents';
import Seo from '@/components/Seo';

import { ProjectFrontMatter } from '@/types/frontmatter';

type SingleProjectPageProps = {
  frontmatter: ProjectFrontMatter;
  code: string;
};

export default function SingleProjectPage({
  frontmatter,
  code,
}: SingleProjectPageProps) {
  const Component = useMdxComponent(code);

  return (
    <Layout>
      <Seo
        templateTitle={frontmatter.name}
        description={frontmatter.description}
        date={new Date(frontmatter.publishedAt).toISOString()}
      />

      <main>
        <section className='bg-bg py-20'>
          <div className='layout'>
            <NextImage
              className='w-full'
              src={frontmatter.displayImage}
              alt={frontmatter.name}
              width={1440}
              height={792}
            />

            <h1 className='mt-8 text-white'>{frontmatter.name}</h1>
            <p className='my-4 text-sm text-white'>{frontmatter.description}</p>

            <div className='mt-2 flex flex-wrap items-center justify-start gap-3 border-b border-white pb-8 text-sm font-medium'>
              {frontmatter.github && (
                <div className='inline-flex items-center gap-2'>
                  <FaGithub className='text-lg text-white' />
                  <CustomLink
                    href={frontmatter.github}
                    className='mt-1 text-white'
                  >
                    Repository
                  </CustomLink>
                </div>
              )}
            </div>

            <section className='mt-8 text-white'>
              <article className='mdx projects prose dark:prose-invert mx-auto w-full transition-colors'>
                <Component
                  opts={{
                    height: 640,
                    width: 960,
                  }}
                ></Component>
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
                ← Back to projects
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
  const posts = await getFiles('projects');
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
  const { code, frontmatter } = await getFileBySlugAndType(slug, 'projects');
  return {
    props: { frontmatter: frontmatter as ProjectFrontMatter, code },
  };
};
