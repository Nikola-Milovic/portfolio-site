import { ProjectPreview } from '@/types/projects';

interface ProjectProps {
  project: ProjectPreview;
  isHighlight?: boolean;
}

export const ProjectItem = ({ project, isHighlight }: ProjectProps) => {
  return (
    <div
      className={`project-preview-card ${
        isHighlight
          ? ' project-preview-card--highlighted'
          : ' project-preview-card--personal '
      }`}
    >
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

        <div className='my-auto flex flex-row gap-1 py-4'>
          {project.links.map((item) => (
            <a
              className='rounded-md bg-secondary p-2 shadow-md'
              href={item.link}
              target='_blank'
              rel='noreferrer'
              key={item.link}
            >
              <item.icon className='h-7 w-7 font-semibold text-white md:h-12 md:w-12'></item.icon>
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
      </div>
    </div>
  );
};
