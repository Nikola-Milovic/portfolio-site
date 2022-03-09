/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

import { getPosts, getProjects } from '@/lib/mdx/helpers';

import { AboutMe } from '@/components/landing/about/Aboutme';
import { BlogSection } from '@/components/landing/blogs/BlogSection';
import { Hero } from '@/components/landing/hero/Hero';
import { ProjectsSection } from '@/components/landing/projects/ProjectsSection';
import { Layout } from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { PostFrontMatter, ProjectFrontMatter } from '@/types/frontmatter';

// TODO -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

type HomePageProps = {
  projects: ProjectFrontMatter[];
  posts: PostFrontMatter[];
};

export default function HomePage({ projects, posts }: HomePageProps) {
  return (
    <Layout>
      <Seo />
      {/* <Seo templateTitle='Home' /> */}
      <main>
        <Hero></Hero>
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
