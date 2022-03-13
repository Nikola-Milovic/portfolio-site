import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import {
  fadeSlideX,
  fadeSlideY,
  onHoverAnim,
  staggerAnimParent,
  whileInViewAnim,
} from '@/components/atomic/animations/animationProps';
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
        <motion.h1
          {...whileInViewAnim}
          {...fadeSlideX(30)}
          className='section-title mb-10'
        >
          Projects
        </motion.h1>

        <ul className='mb-4 flex flex-col items-center md:mb-10'>
          {projects
            .filter((proj) => proj.personal != true)
            .map((proj) => (
              <ProjectCard
                {...whileInViewAnim}
                {...fadeSlideX(10, false, 0.7, 0.2)}
                key={proj.slug}
                project={proj}
                isHighlight={true}
              ></ProjectCard>
            ))}
        </ul>

        <motion.ul
          {...staggerAnimParent(0.4, 0.3)}
          className='mx-auto mt-4 grid w-full max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:gap-10'
        >
          {projects
            .filter((proj) => proj.personal == true)
            .map((proj) => (
              <ProjectCard
                {...fadeSlideY(20)}
                key={proj.slug}
                project={proj}
              ></ProjectCard>
            ))}
        </motion.ul>

        <UnstyledLink
          {...whileInViewAnim}
          {...onHoverAnim(1.03)}
          {...fadeSlideX(30, undefined, 0.7, 0.3)}
          href='/projects'
          className='see-more-button group border-primary text-primary  hover:bg-primary hover:text-secondary'
        >
          See more
          <FaArrowRight className='transform transition group-hover:translate-x-2'></FaArrowRight>
        </UnstyledLink>
      </div>
    </section>
  );
};
