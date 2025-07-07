import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  // List of pages where Footer should NOT appear
  const hideFooterOnPaths = ['/book'];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-black pt-16">{children}</main>

      {/* Render footer only if not in hideFooterOnPaths */}
      {!hideFooterOnPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default Layout;
