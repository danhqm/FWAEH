import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts the current URL path (e.g., "/product")
  const { pathname } = useLocation();

  // Every time the pathname changes, run this block of code
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render any visible HTML, it works entirely in the background
  return null;
};

export default ScrollToTop;