'use client';

import { useHeadingObserver } from '@/hooks/useHeadingObserver';
import { cn } from '@/utils/cn';
import ScrollToTopButton from './common/scroll-to-top-button';
import CopyLinkButton from './common/copy-link-button';
import BackButton from './common/back-button';
import ScrollToCommentButton from './common/scroll-to-comment-button';

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
    <div className="w-full space-y-2">
      <nav className="xl:border-l xl:border-gray-200 xl:px-3 xl:py-2 xl:dark:border-gray-700">
        <p className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100 xl:text-sm">
          On This Page
        </p>
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

      <div className="hidden xl:flex xl:gap-2">
        <BackButton />
        <ScrollToTopButton />
        <ScrollToCommentButton />
        <CopyLinkButton />
      </div>
    </div>
  );
};

export default TableOfContents;
