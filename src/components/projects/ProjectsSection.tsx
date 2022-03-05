import { FaReact } from 'react-icons/fa';

import { HighlightedProject } from './HighlightedProject';
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      displayImage: 'https://picsum.photos/500',
    },
    {
      hasPersonalPage: false,
      name: 'Test 2',
      id: 'test2',
      links: [{ icon: FaReact, link: 'google.com' }],
      technologies: ['React', 'Graphql', 'Nodejs'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      displayImage: 'https://picsum.photos/500',
    },
    {
      hasPersonalPage: false,
      id: 'test3',
      name: 'Test 2',
      links: [{ icon: FaReact, link: 'google.com' }],
      technologies: [FaReact, 'Graphql', 'Nodejs'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
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

        <HighlightedProject
          project={{
            links: [{ icon: FaReact, link: 'google.com' }],
            hasPersonalPage: false,
            id: 'test1',
            name: 'Test 1',
            technologies: ['React', 'Graphql'],
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            displayImage: 'https://picsum.photos/1980',
          }}
        ></HighlightedProject>

        <h2 className='my-10 text-center text-white'>Personal Projects</h2>

        <div className='grid auto-rows-auto grid-cols-1 content-evenly items-stretch justify-evenly justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-2'>
          {projects.map((proj) => (
            <ProjectItem key={proj.id} project={proj}></ProjectItem>
          ))}
        </div>
      </div>
    </section>
  );
};
