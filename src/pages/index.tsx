/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { Hero } from '@/components/hero/Hero';
import Seo from '@/components/Seo';

// TODO -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main className='relative h-screen w-screen'>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </main>
  );
}
