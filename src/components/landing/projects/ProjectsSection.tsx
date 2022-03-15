import clsx from 'clsx';
import { FaArrowRight } from 'react-icons/fa';
import { InView } from 'react-intersection-observer';

import clsxm from '@/lib/clsxm';

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
        <InView triggerOnce threshold={0.8} delay={200}>
          {({ ref, inView }) => (
            <>
              <h1
                ref={ref}
                data-fade='0'
                className={clsxm(
                  'section-title mb-10 ',
                  'fade-slide-left',
                  '-translate-x-[50%] delay-150 duration-700',
                  inView && 'in-view'
                )}
              >
                Projects
              </h1>

              <ul
                className={clsxm(
                  'mb-4 flex flex-col items-center md:mb-10',
                  'fade-slide-left',
                  '-translate-x-[30%]',
                  'delay-500 duration-700',
                  inView && 'in-view'
                )}
              >
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
            </>
          )}
        </InView>

        <InView triggerOnce threshold={0.15} delay={200}>
          {({ ref, inView }) => (
            <ul
              ref={ref}
              className={clsxm(
                'mx-auto mt-4 grid w-full max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:gap-10',
                'fade-slide-bottom',
                { 'in-view': inView }
              )}
            >
              {projects
                .filter((proj) => proj.personal == true)
                .map((proj) => (
                  <ProjectCard key={proj.slug} project={proj}></ProjectCard>
                ))}
            </ul>
          )}
        </InView>

        <InView triggerOnce delay={250} threshold={0.8}>
          {({ ref, inView }) => (
            <UnstyledLink
              ref={ref}
              href='/projects'
              className={clsx(
                'see-more-button group border-primary text-primary',
                'hover:bg-primary hover:text-secondary',
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
  );
};
