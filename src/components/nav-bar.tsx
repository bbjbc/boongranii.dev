'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ThemeToggle from './theme-toggle';
import { ROUTER_PATH } from '../constants/path';
import { cn } from '@/app/utils/cn';

const links = [
  { label: ROUTER_PATH.HOME.LABEL, path: ROUTER_PATH.HOME.PATH },
  { label: ROUTER_PATH.POSTS.LABEL, path: ROUTER_PATH.POSTS.PATH },
  { label: ROUTER_PATH.NOTES.LABEL, path: ROUTER_PATH.NOTES.PATH },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="container flex items-center justify-between">
      <div className="flex items-center gap-6 py-6">
        {links.map(link => (
          <Link
            key={link.path}
            href={link.path}
            className={cn(
              'transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-300',
              pathname === link.path
                ? 'font-semibold text-gray-600 dark:text-gray-300'
                : 'text-gray-400',
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
