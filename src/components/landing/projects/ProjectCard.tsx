import clsx from 'clsx';
import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import CloudinaryImg from '@/components/atomic/images/CloudinaryImg';
import UnstyledLink from '@/components/atomic/links/UnstyledLink';

import { ProjectFrontMatter } from '@/types/frontmatter';

type ProjectCardProps = {
  project: ProjectFrontMatter;
  isHighlight?: boolean;
} & DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export const ProjectCard = ({ project, isHighlight }: ProjectCardProps) => {
  return (
    <li
      className={clsx(
        'project-card animate-shadow rounded-lg shadow-md',
        'transition-shadow duration-200 hover:shadow-light',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'motion-reduce:hover:scale-100',
        {
          'max-h-sm w-full max-w-xl': isHighlight,
        }
      )}
    >
      <UnstyledLink
        aria-label={'More details about ' + project.name}
        href={'/projects/' + project.slug}
        className='group flex h-full flex-col items-start'
      >
        <div className='z-10 flex h-full w-full flex-col rounded-t-lg bg-bg p-3 align-top lg:p-4 '>
          <h3 className='mb-3 text-white'>{project.name}</h3>

          <p className='mb-auto text-sm text-white'>
            {project.shortDescription}
          </p>
        </div>

        <div className='h-full w-full rounded-b-lg  bg-green px-3 pb-2'>
          <CloudinaryImg
            className='pointer-events-none w-full rounded-none rounded-b-md'
            publicId={project.displayImage}
            alt={'Preview image for project ' + project.name}
            width={1440}
            height={792}
            preview={false}
          />

          <p className='group-hover:animated--underline group-hover:animated--underline-primary mb-1 mt-3 flex w-fit cursor-pointer items-center gap-1 text-sm font-semibold uppercase text-white hover:scale-[1.02]'>
            more info
            <FaArrowRight className='transform transition group-hover:translate-x-1' />
          </p>
        </div>
      </UnstyledLink>
    </li>
  );
};
