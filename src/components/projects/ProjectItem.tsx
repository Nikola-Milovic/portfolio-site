import { ProjectPreview } from '@/types/projects';

interface ProjectProps {
  project: ProjectPreview;
}

export const ProjectItem = ({ project }: ProjectProps) => {
  return (
    <div className='project-preview-card project-preview-card--personal'>
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='h-full w-full rounded object-cover object-center'
        alt={'Preview image for project ' + project.name}
        src={project.displayImage}
      ></img>

      <div className='project-preview-overview'>
        <h2 className='pb-2 text-2xl text-white'>{project.name}</h2>
        <div className='flex flex-row gap-1'>
          {project.technologies.map((item, index) => (
            <span className='project-preview-technologies-badge' key={index}>
              {item}
            </span>
          ))}
        </div>

        <p className='project-preview-description'>{project.description}</p>
      </div>
    </div>
  );
};
