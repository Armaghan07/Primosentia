import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi pathname change ho, scroll karo top pe
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
