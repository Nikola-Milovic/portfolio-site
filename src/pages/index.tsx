/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import { AboutMe } from '@/components/about/Aboutme';
import { Header } from '@/components/header/Header';
import { Hero } from '@/components/hero/Hero';
import { Projects } from '@/components/projects/ProjectsSection';
import Seo from '@/components/Seo';

// TODO -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div className='flex h-full flex-col overflow-auto'>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header></Header>
      {/*  Page content */}
      <main>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Projects></Projects>
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}
