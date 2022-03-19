/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

import dynamic from 'next/dynamic';

import useLoaded from '@/lib/hooks/useLoaded';
import { getPosts, getProjects } from '@/lib/mdx/helpers';

import { Hero } from '@/components/landing/hero/Hero';
import { Layout } from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const AboutMe = dynamic(() => import('@/components/landing/about/Aboutme'));
const ProjectsSection = dynamic(
  () => import('@/components/landing/projects/ProjectsSection')
);
const BlogSection = dynamic(
  () => import('@/components/landing/blogs/BlogSection')
);

import { PostFrontMatter, ProjectFrontMatter } from '@/types/frontmatter';

// TODO -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

type HomePageProps = {
  projects: ProjectFrontMatter[];
  posts: PostFrontMatter[];
};

export default function HomePage({ projects, posts }: HomePageProps) {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />
      <main>
        <Hero isLoaded={isLoaded}></Hero>
        <AboutMe></AboutMe>
        <ProjectsSection projects={projects}></ProjectsSection>
        <BlogSection posts={posts}></BlogSection>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  const posts = await getPosts();
  return {
    props: {
      projects,
      posts,
    },
  };
}
