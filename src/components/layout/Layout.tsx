import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { PreloadProvider } from '../../context/PreloadContext';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-full flex-col overflow-auto'>
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
      <Footer />
    </div>
  );
};
