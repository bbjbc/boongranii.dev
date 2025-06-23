import { useEffect, useState } from 'react';

interface ScrollVisibilityProps {
  showThreshold?: number;
  hideThreshold?: number;
}

const useScrollVisibility = ({
  showThreshold = 10,
  hideThreshold = 100,
}: ScrollVisibilityProps = {}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < showThreshold) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY > hideThreshold
      ) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, showThreshold, hideThreshold]);

  return { isVisible, scrollY: lastScrollY };
};

export { useScrollVisibility };
