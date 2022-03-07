import { BlogItem } from './BlogItem';
import { BottomBlogsDivider } from '../atomic/dividers/BlogDividers';

import { BlogPreview } from '@/types/blogPreview';

export const BlogSection = () => {
  const blogs: BlogPreview[] = [
    {
      id: 'test1',
      title: 'Test 1',
      keywords: ['React', 'Graphql'],
      publishedAt: new Date(2022, 10, 17),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      displayImage: 'https://picsum.photos/500',
    },
    {
      id: 'test13',
      title: 'Test 1',
      keywords: ['React', 'Graphql'],
      publishedAt: new Date(2022, 10, 17),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      displayImage: 'https://picsum.photos/500',
    },
    {
      id: 'test12',
      title: 'Test 1',
      keywords: ['React', 'Graphql'],
      publishedAt: new Date(2022, 10, 17),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      displayImage: 'https://picsum.photos/500',
    },
  ];

  return (
    <section id='blogs' className='md:min-h-700 relative w-full bg-bg py-20'>
      <BottomBlogsDivider />

      <div className='layout my-10 flex h-full flex-col p-4'>
        <h1 className='section-title mb-10'>Blogs</h1>

        <ul className='mx-auto mt-4 grid max-w-sm gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog}></BlogItem>
          ))}
        </ul>
      </div>
    </section>
  );
};
