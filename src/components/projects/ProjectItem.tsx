import { useState } from 'react';

import { ProjectPreview } from '@/types/projects';

interface ProjectProps {
  project: ProjectPreview;
}

export const ProjectItem = ({ project }: ProjectProps) => {
  const [showingDetails, setShowingDetails] = useState(false);

  return (
    <a
      onTouchStart={() => setShowingDetails(true)}
      onTouchEnd={() => setShowingDetails(false)}
      onMouseEnter={() => setShowingDetails(true)}
      onMouseLeave={() => setShowingDetails(false)}
      onClick={() => {
        //TODO
        // eslint-disable-next-line no-console
        if (showingDetails) console.debug('Go go details');
      }}
      className='project-card relative z-10 flex h-full w-full transform flex-col justify-between
       overflow-hidden rounded-lg shadow-xl transition duration-200 hover:z-20 
        hover:scale-105 hover:shadow-light sm:w-11/12 md:w-10/12'
    >
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='h-full w-full rounded object-cover object-center'
        alt={'Preview image for project ' + project.name}
        src={project.displayImage}
      ></img>

      <div className='project-overview'>
        <h2 className='pb-2 text-2xl text-white'>{project.name}</h2>
      </div>
    </a>
  );
};
