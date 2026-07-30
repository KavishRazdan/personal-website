import { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

const getPageFromPath = (path: string) => {
  const cleanPath = path.replace(/\/$/, '') || '/';
  if (cleanPath === '/about') return 'about';
  if (cleanPath === '/projects') return 'projects';
  if (cleanPath === '/resume') return 'resume';
  return 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (window.location.hash) {
      const hashPath = window.location.hash.replace(/^#/, '') || '/';
      return getPageFromPath(hashPath);
    }
    return getPageFromPath(window.location.pathname);
  });

  useEffect(() => {
    // If URL has a legacy hash (e.g. /#/projects), clean it up and use clean URL path
    if (window.location.hash) {
      const hashPath = window.location.hash.replace(/^#/, '') || '/';
      const normalizedPath = hashPath.startsWith('/') ? hashPath : `/${hashPath}`;
      window.history.replaceState(null, '', normalizedPath);
      setCurrentPage(getPageFromPath(normalizedPath));
    }

    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top smoothly when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const navigate = (path: string) => {
    const targetPath = path.startsWith('/') ? path : `/${path}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    setCurrentPage(getPageFromPath(targetPath));
  };

  if (currentPage === 'about') {
    return <About navigate={navigate} />;
  }

  if (currentPage === 'projects') {
    return <Projects navigate={navigate} />;
  }

  if (currentPage === 'resume') {
    return <Resume navigate={navigate} />;
  }

  return <Portfolio navigate={navigate} />;
}