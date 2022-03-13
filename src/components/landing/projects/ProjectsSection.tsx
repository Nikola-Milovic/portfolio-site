import { FaArrowRight } from 'react-icons/fa';
import { InView } from 'react-intersection-observer';

import UnstyledLink from '@/components/atomic/links/UnstyledLink';

import { ProjectCard } from './ProjectCard';
import {
  BottomProjectsDivider,
  TopProjectsDivider,
} from '../../atomic/dividers/ProjectDividers';

import { ProjectFrontMatter } from '@/types/frontmatter';

type ProjectSectionProps = {
  projects: ProjectFrontMatter[];
};

export const ProjectsSection = ({ projects }: ProjectSectionProps) => {
  return (
    <section
      id='projects'
      className='md:min-h-700 relative w-full bg-secondary pb-10 pt-20 md:pb-20'
    >
      <TopProjectsDivider />
      <BottomProjectsDivider />

      <div className='layout flex h-full flex-col p-4'>
        <InView triggerOnce rootMargin='0px -20%'>
          <h1 className='section-title mb-10'>Projects</h1>
        </InView>

        <ul className='mb-4 flex flex-col items-center md:mb-10'>
          {projects
            .filter((proj) => proj.personal != true)
            .map((proj) => (
              <ProjectCard
                key={proj.slug}
                project={proj}
                isHighlight={true}
              ></ProjectCard>
            ))}
        </ul>

        <ul className='mx-auto mt-4 grid w-full max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:gap-10'>
          {projects
            .filter((proj) => proj.personal == true)
            .map((proj, index) => (
              <InView
                delay={index * 0.1}
                key={proj.slug}
                triggerOnce
                rootMargin='10% 0px'
              >
                <ProjectCard project={proj}></ProjectCard>
              </InView>
            ))}
        </ul>

        <InView triggerOnce rootMargin='0px -20%' delay={100}>
          <UnstyledLink
            href='/projects'
            className='see-more-button group border-primary text-primary transition-transform hover:scale-[1.02]  hover:bg-primary hover:text-secondary'
          >
            See more
            <FaArrowRight className='transform transition group-hover:translate-x-2'></FaArrowRight>
          </UnstyledLink>
        </InView>
      </div>
    </section>
  );
};
