'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

import Button from '../ui/button';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      icon={theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
    />
  );
};

export default ThemeToggle;
