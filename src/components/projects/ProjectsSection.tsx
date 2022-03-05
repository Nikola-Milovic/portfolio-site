import { FaReact } from 'react-icons/fa';

import { ProjectItem } from './ProjectItem';
import {
  BottomProjectsDivider,
  TopProjectsDivider,
} from '../atomic/dividers/ProjectDividers';

import { ProjectPreview } from '@/types/projects';

export const Projects = () => {
  const projects: ProjectPreview[] = [
    {
      hasPersonalPage: false,
      id: 'test1',
      name: 'Test 1',
      technologies: ['React', 'Graphql'],
      links: [{ icon: FaReact, link: 'google.com' }],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      displayImage: 'https://picsum.photos/500',
    },
    {
      hasPersonalPage: false,
      name: 'Test 2',
      id: 'test2',
      links: [{ icon: FaReact, link: 'google.com' }],
      technologies: ['React', 'Graphql', 'Nodejs'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      displayImage: 'https://picsum.photos/500',
    },
    {
      hasPersonalPage: true,
      id: 'test3',
      name: 'Test 2',
      links: [{ icon: FaReact, link: 'google.com' }],
      technologies: ['React', 'Graphql', 'Nodejs'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      displayImage: 'https://picsum.photos/500',
    },
  ];

  return (
    <section
      id='projects'
      className='md:min-h-700 relative w-full bg-secondary pb-7 pt-20'
    >
      <TopProjectsDivider />
      <BottomProjectsDivider />

      <div className='layout flex h-full flex-col p-4'>
        <h1 className='section-title mb-10'>Projects</h1>

        <ProjectItem
          project={{
            links: [{ icon: FaReact, link: 'google.com' }],
            hasPersonalPage: true,
            id: 'test1',
            name: 'Test 1',
            technologies: ['React', 'Graphql'],
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            displayImage: 'https://picsum.photos/1980',
          }}
          isHighlight={true}
        ></ProjectItem>

        <h2 className='mb-2 mt-10 text-center text-white md:mb-5 md:mt-16'>
          Personal Projects
        </h2>

        <div className='mx-auto mt-4 grid  max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:gap-10'>
          {projects.map((proj) => (
            <ProjectItem key={proj.id} project={proj}></ProjectItem>
          ))}
        </div>
      </div>
    </section>
  );
};
