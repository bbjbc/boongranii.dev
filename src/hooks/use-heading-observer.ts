'use client';

import { useEffect, useState, useRef } from 'react';

interface HeadingObserverProps {
  id: string;
  text: string;
  level: number;
}

const useHeadingObserver = (headings: HeadingObserverProps[]) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isScrolling, setIsScrolling] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = entries => {
      if (isScrolling) return; // 스크롤 중에는 업데이트 건너뛰기

      const visibleHeadings = entries.filter(entry => {
        const boundingRect = entry.boundingClientRect;
        return entry.isIntersecting && boundingRect.top;
      });

      if (visibleHeadings.length > 0) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        );
        const activeHeading = sortedVisibleHeadings[0];
        setActiveId(activeHeading.target.id);
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-20px 0px -80% 0px',
      threshold: [0, 0.5, 1],
    });

    if (!isScrolling) {
      headings.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) {
          observerRef.current?.observe(element);
        }
      });
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [headings, isScrolling]);

  const handleClick = (headingId: string) => {
    const element = document.getElementById(headingId);
    if (!element) return;

    try {
      setIsScrolling(true);
      setActiveId(headingId);

      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
      });

      window.history.pushState({}, '', `#${headingId}`);

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    } catch (error) {
      console.error('Error scrolling to heading:', error);
      setIsScrolling(false);
    }
  };

  return { activeId, handleClick };
};

export { useHeadingObserver };
