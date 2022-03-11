import { HTMLMotionProps, motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import { onHoverAnim } from '@/components/atomic/animations/animationProps';
import CloudinaryImg from '@/components/atomic/images/CloudinaryImg';

import { ProjectFrontMatter } from '@/types/frontmatter';

type ProjectCardProps = {
  project: ProjectFrontMatter;
  isHighlight?: boolean;
} & HTMLMotionProps<'li'>;

export const ProjectCard = ({
  project,
  isHighlight,
  ...rest
}: ProjectCardProps) => {
  return (
    <motion.li
      {...onHoverAnim(1.03, 0.1)}
      {...rest}
      className={`project-preview-card ${
        isHighlight
          ? ' project-preview-card--highlighted'
          : ' project-preview-card--personal '
      }`}
    >
      <CloudinaryImg
        className='pointer-events-none w-full overflow-hidden rounded-t-md lg:rounded-t-lg'
        publicId={project.displayImage}
        alt={'Preview image for project ' + project.name}
        width={1200}
        height={1200}
        preview={false}
      />

      <div className='project-preview-overview'>
        <h2
          className={`pb-2 text-2xl text-white ${
            isHighlight && 'md:text-3xl lg:text-5xl'
          }`}
        >
          {project.name}
        </h2>
        <div className='flex h-full flex-col items-center justify-around'>
          <div className='flex flex-row gap-1'>
            {project.technologies.map((item, index) => (
              <span className='project-preview-technologies-badge' key={index}>
                {item}
              </span>
            ))}
          </div>

          <div className='flex flex-row gap-1 py-4'>
            {project.github && (
              <a
                className='rounded-md bg-secondary p-2 hover:scale-105 hover:shadow-lg hover:shadow-primary lg:rounded-lg'
                href={project.github}
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub className='h-7 w-7 font-semibold text-white md:h-12 md:w-12 lg:h-14 lg:w-14'></FaGithub>
              </a>
            )}
            {project.webpage && (
              <a
                className='rounded-md bg-secondary p-2 hover:scale-105 hover:shadow-lg hover:shadow-primary lg:rounded-lg'
                href={project.webpage}
                target='_blank'
                rel='noreferrer'
              >
                <FaExternalLinkAlt className='h-7 w-7 p-3 font-semibold text-white md:h-12 md:w-12 lg:h-14 lg:w-14'></FaExternalLinkAlt>
              </a>
            )}
          </div>

          <p
            className={`${
              isHighlight
                ? 'project-preview-description--highlighted'
                : 'project-preview-description'
            }`}
          >
            {project.description}
          </p>

          <a
            href={'/projects/' + project.slug}
            className='group flex cursor-pointer items-center gap-1 font-semibold uppercase text-white hover:scale-105'
          >
            more info
            <FaArrowRight className='transform transition group-hover:translate-x-1' />
          </a>
        </div>
      </div>
    </motion.li>
  );
};
