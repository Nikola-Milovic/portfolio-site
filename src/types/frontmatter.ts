import { ReadTimeResults } from 'reading-time';

export type ContentType = 'blog' | 'projects';

export type ProjectFrontMatter = {
  slug: string;
  name: string;
  technologies: string[];
  description: string;
  shortDescription: string;
  publishedAt: string;
  github: string;
  webpage: string | null;
  displayImage: string;
  personal: boolean | null;
  wordCount: number;
  readingTime: ReadTimeResults;
};

export type PostFrontMatter = {
  slug: string;
  title: string;
  keywords: string[];
  lastUpdated?: Date;
  description: string;
  displayImage: string;
  publishedAt: string;
  wordCount: number;
  readingTime: ReadTimeResults;
};
