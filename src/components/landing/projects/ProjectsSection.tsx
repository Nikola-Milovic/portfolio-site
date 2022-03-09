import { motion } from 'framer-motion';

import {
  fadeIn,
  fadeSlideX,
  fadeSlideY,
  whileInViewAnim,
} from '@/components/atomic/animations/animationProps';

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
        <motion.h1
          {...whileInViewAnim}
          {...fadeSlideX(30)}
          className='section-title mb-10'
        >
          Projects
        </motion.h1>

        <ul className='flex w-full flex-col'>
          {projects
            .filter((proj) => proj.personal != true)
            .map((proj) => (
              <ProjectCard
                {...whileInViewAnim}
                {...fadeIn}
                key={proj.slug}
                project={proj}
                isHighlight={true}
              ></ProjectCard>
            ))}
        </ul>

        <h2 className='mb-2 mt-10 text-center text-white md:mb-5 md:mt-16'>
          Personal Projects
        </h2>

        <ul className='mx-auto mt-4 grid w-full max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:gap-10'>
          {projects
            .filter((proj) => proj.personal == true)
            .map((proj) => (
              <ProjectCard
                {...whileInViewAnim}
                {...fadeSlideY(20)}
                key={proj.slug}
                project={proj}
              ></ProjectCard>
            ))}
        </ul>
      </div>
    </section>
  );
};
