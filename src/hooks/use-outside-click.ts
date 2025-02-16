'use client';

import { useRef, useEffect } from 'react';

type ClickHandler = (event: MouseEvent) => void;

const useOutsideClick = <T extends HTMLElement>(handler: ClickHandler) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler]);

  return ref;
};

export { useOutsideClick };
