'use client';

import { useHeadingObserver } from '@/hooks/useHeadingObserver';
import { cn } from '@/app/utils/cn';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TOCProps {
  headings: TOCItem[];
}

const TableOfContents = ({ headings }: TOCProps) => {
  const { activeId, handleClick } = useHeadingObserver(headings);

  return (
    <nav className="w-full">
      <div className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
        On This Page
      </div>
      <ul className="space-y-2 text-sm">
        {headings.map(heading => (
          <li
            key={heading.id}
            className={cn(
              heading.level === 1 && 'pl-1',
              heading.level === 2 && 'pl-4',
              heading.level === 3 && 'pl-8',
            )}
          >
            <button
              onClick={e => {
                e.preventDefault();
                handleClick(heading.id);
              }}
              className={cn(
                'group relative flex w-full items-center text-left before:absolute before:-left-2 before:h-full before:w-0.5 before:bg-blue-500 before:opacity-0 before:transition-all hover:text-blue-500',
                activeId === heading.id
                  ? 'font-medium text-blue-500 before:opacity-100'
                  : 'text-gray-600 dark:text-gray-300',
              )}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
