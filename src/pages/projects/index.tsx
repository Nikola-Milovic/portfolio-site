import { getProjects } from '@/lib/mdx/helpers';

import { ProjectCard } from '@/components/landing/projects/ProjectCard';
import { Layout } from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { ProjectFrontMatter } from '@/types/frontmatter';

type ProjectsPageProps = {
  projects: ProjectFrontMatter[];
};

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <Layout>
      {/* TODO seo */}
      <Seo />
      {/* <Seo templateTitle='Home' /> */}
      <main className='flex h-full w-full bg-bg py-20'>
        <div className='layout my-20'>
          <h1 className='text-5xl font-bold text-white'>Projects</h1>
          <h3 className='my-2 text-lg font-medium text-white'>
            A collection of my commercial and personal projects
          </h3>

          <ul className='mx-auto mt-4 grid w-full max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:gap-10'>
            {projects.map((proj) => (
              <ProjectCard key={proj.slug} project={proj}></ProjectCard>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}
