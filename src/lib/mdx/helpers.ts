import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import { join } from 'path';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';

import {
  ContentType,
  PostFrontMatter,
  ProjectFrontMatter,
} from '@/types/frontmatter';

export async function getFiles(type: ContentType) {
  return readdirSync(join(process.cwd(), 'src', 'content', type));
}

export const getProjects = async () => {
  const files = readdirSync(join(process.cwd(), 'src', 'content', 'projects'));
  const projects: ProjectFrontMatter[] = await Promise.all(
    files.map(async (filename) => {
      const content = readFileSync(
        join(process.cwd(), 'src', 'content', 'projects', filename),
        'utf-8'
      );
      const { data } = matter(content);

      const metaData = data as ProjectFrontMatter;

      return {
        ...metaData,
        slug: filename.split('.')[0],
      };
    })
  );
  return projects;
};

export const getPosts = async () => {
  const files = readdirSync(join(process.cwd(), 'src', 'content', 'blog'));
  const blogs: PostFrontMatter[] = await Promise.all(
    files.map(async (filename) => {
      const content = readFileSync(
        join(process.cwd(), 'src', 'content', 'blog', filename),
        'utf-8'
      );
      const { data } = matter(content);

      const metaData = data as PostFrontMatter;

      return {
        ...metaData,
        slug: filename.split('.')[0],
        readingTime: readingTime(content),
      };
    })
  );
  return blogs;
};

export const getFileBySlugAndType = async (slug: string, type: ContentType) => {
  const file = readFileSync(
    join(process.cwd(), 'src', 'content', type, slug + '.mdx'),
    'utf-8'
  );

  const { code, frontmatter } = await bundleMDX({
    source: file,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        // rehypeSlug,
        // rehypePrism,
        // [
        //   rehypeAutolinkHeadings,
        //   {
        //     properties: {
        //       className: ['hash-anchor'],
        //     },
        //   },
        // ],
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter: {
      wordCount: file.split(/\s+/gu).length,
      readingTime: readingTime(file),
      slug: slug || null,
      ...frontmatter,
    },
  };
};
