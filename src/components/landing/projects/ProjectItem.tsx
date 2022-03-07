import { ComponentPropsWithoutRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import NextImage from '../../atomic/images/NextImage';

import { ProjectPreview } from '@/types/projectPreview';

type ProjectProps = {
  project: ProjectPreview;
  isHighlight?: boolean;
} & ComponentPropsWithoutRef<'li'>;

export const ProjectItem = ({ project, isHighlight }: ProjectProps) => {
  return (
    <li
      className={`project-preview-card ${
        isHighlight
          ? ' project-preview-card--highlighted'
          : ' project-preview-card--personal '
      }`}
    >
      <NextImage
        className='pointer-events-none w-full overflow-hidden rounded-t-md lg:rounded-t-lg'
        src={project.displayImage}
        alt={'Preview image for project ' + project.name}
        width={1200}
        height={1200}
      />

      <div className='project-preview-overview'>
        <h2 className='pb-2 text-2xl text-white'>{project.name}</h2>
        <div className='flex h-full flex-col items-center justify-around'>
          <div className='flex flex-row gap-1'>
            {project.technologies.map((item, index) => (
              <span className='project-preview-technologies-badge' key={index}>
                {item}
              </span>
            ))}
          </div>

          <div className='flex flex-row gap-1 py-4'>
            {project.links.map((item) => (
              <a
                className='rounded-md bg-secondary p-2 hover:scale-105 hover:shadow-lg hover:shadow-primary lg:rounded-lg'
                href={item.link}
                target='_blank'
                rel='noreferrer'
                key={item.link}
              >
                <item.icon className='h-7 w-7 font-semibold text-white md:h-12 md:w-12 lg:h-14 lg:w-14'></item.icon>
              </a>
            ))}
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

          {project.hasPersonalPage && (
            <a className='group flex cursor-pointer items-center gap-1 font-semibold uppercase text-white hover:scale-105'>
              more info
              <FaArrowRight className='transform transition group-hover:translate-x-1' />
            </a>
          )}
        </div>
      </div>
    </li>
  );
};
