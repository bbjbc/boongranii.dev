'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'dark' ? (
        <IoSunnyOutline size={18} />
      ) : (
        <IoMoonOutline size={18} />
      )}
    </button>
  );
};

export default ThemeToggle;
