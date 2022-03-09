import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import { useMemo } from 'react';
import YouTubeEmbed from 'react-youtube';

import CustomLink from '@/components/atomic/links/CustomLink';

const mdxComponents = {
  a: CustomLink,
  Image,
  YouTubeEmbed,
};

/**
 * This should be rendered within a useMemo
 * @param code the code to get the component from
 * @returns the component
 */
function getMdxComponent(code: string) {
  const Component = getMDXComponent(code);
  function WMdxComponent({
    components,
    ...rest
  }: Parameters<typeof Component>['0']) {
    return (
      // @ts-expect-error the types are wrong here
      <Component components={{ ...mdxComponents, ...components }} {...rest} />
    );
  }
  return WMdxComponent;
}

export function useMdxComponent(code: string) {
  return useMemo(() => getMdxComponent(code), [code]);
}
