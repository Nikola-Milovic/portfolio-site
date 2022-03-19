import { domAnimation, LazyMotion } from 'framer-motion';
import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/mdx.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} />
    </LazyMotion>
  );
}

export default MyApp;
