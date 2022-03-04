import { ProjectItem } from './ProjectItem';
import { TopProjectsDivider } from '../atomic/dividers/ProjectDividers';

import { ProjectPreview } from '@/types/projects';

export const Projects = () => {
  const projects: ProjectPreview[] = [
    {
      hasPersonalPage: false,
      id: 'test1',
      name: 'Test 1',
      technologies: ['React', 'Graphql'],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      displayImage: 'https://picsum.photos/500',
    },
    {
      hasPersonalPage: false,
      name: 'Test 2',
      id: 'test2',
      technologies: ['React', 'Graphql', 'Nodejs'],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      displayImage: 'https://picsum.photos/500',
    },
    {
      hasPersonalPage: false,
      id: 'test3',
      name: 'Test 2',
      technologies: ['React', 'Graphql', 'Nodejs'],
      shortDescription:
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

      <div className='layout flex h-full flex-col p-4'>
        <p className='mb-20 text-3xl font-bold text-white'>Projects</p>

        <div className='grid auto-rows-auto grid-cols-1 content-evenly items-stretch justify-evenly justify-items-center gap-y-6 gap-x-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
          {projects.map((proj) => (
            <ProjectItem key={proj.id} project={proj}></ProjectItem>
          ))}
        </div>
      </div>
    </section>
  );
};
