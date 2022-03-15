import clsx from 'clsx';
import * as React from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiAndroid,
  SiFirebase,
  SiGoogleanalytics,
  SiHeroku,
  SiIos,
  SiKotlin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import Tooltip from '@/components/atomic/Tooltip';

export type TechListType = keyof typeof techList;

type TechnologyIconProps = {
  technologies: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export const TechnologyIcons = ({
  technologies,
  className,
}: TechnologyIconProps) => {
  return (
    <ul className={clsx(className, 'mx-3 flex gap-2')}>
      {technologies.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} content={<p>{current.name}</p>}>
            <li className='text-xl text-white hover:scale-105'>
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
};

const techList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  kotlin: {
    icon: SiKotlin,
    name: 'Kotlin',
  },
  Heroku: {
    icon: SiHeroku,
    name: 'Heroku',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux',
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: 'Google Analytics',
  },
  android: {
    icon: SiAndroid,
    name: 'Android',
  },
  ios: {
    icon: SiIos,
    name: 'IOS',
  },
};
