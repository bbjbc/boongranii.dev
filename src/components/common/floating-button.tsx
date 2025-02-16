'use client';

import { useState, useCallback } from 'react';

import { LuShipWheel } from 'react-icons/lu';

import Button from '../button';
import BackButton from './back-button';
import CopyLinkButton from './copy-link-button';
import ScrollToTopButton from './scroll-to-top-button';
import ScrollToCommentButton from './scroll-to-comment-button';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { cn } from '@/utils/cn';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    if (isVisible) {
      setIsVisible(false);
    }
  }, [isVisible]);

  const handleClick = () => {
    setIsVisible(prev => !prev);
  };

  const containerRef = useOutsideClick<HTMLDivElement>(handleClose);

  return (
    <div className="fixed bottom-4 right-4 z-50 xl:hidden" ref={containerRef}>
      <div
        className={cn(
          'mb-2 flex flex-col gap-2 transition-all duration-200',
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-10 opacity-0',
        )}
      >
        <BackButton size={22} />
        <CopyLinkButton size={22} />
        <ScrollToCommentButton size={22} />
        <ScrollToTopButton size={22} />
      </div>

      <Button
        onClick={handleClick}
        variant="outline"
        className={cn(
          'transition-transform duration-200',
          isVisible &&
            'rotate-90 bg-black text-gray-300 dark:bg-white dark:text-gray-600',
        )}
        aria-label={isVisible ? 'Close menu' : 'Open menu'}
      >
        <LuShipWheel size={22} />
      </Button>
    </div>
  );
};

export default FloatingButton;
