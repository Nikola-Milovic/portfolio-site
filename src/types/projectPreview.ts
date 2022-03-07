import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type ProjectPreview = {
  id: string;
  name: string;
  technologies: ReactNode[];
  description: string;
  links: { icon: IconType; link: string }[];
  hasPersonalPage: boolean;
  displayImage: string;
};
