import Link from 'next/link';

interface ContentNavigationItemProps {
  type: 'prev' | 'next';
  content?: {
    permalink: string;
    title: string;
  };
}

interface ContentNavigationProps {
  prevContent?: ContentNavigationItemProps['content'];
  nextContent?: ContentNavigationItemProps['content'];
}

const ContnetNavigationItem = ({
  type,
  content,
}: ContentNavigationItemProps) => {
  if (!content) return <div />;

  return (
    <Link
      href={content.permalink}
      className="block rounded-lg border border-gray-300 bg-transparent p-4 transition-all duration-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
    >
      <div className="flex flex-col space-y-1">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {type === 'prev' ? '이전 포스트' : '다음 포스트'}
        </span>
        <span className="line-clamp-1 text-sm font-medium text-gray-900 dark:text-gray-100">
          {content.title}
        </span>
      </div>
    </Link>
  );
};

const ContentNavigation = ({
  prevContent,
  nextContent,
}: ContentNavigationProps) => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-200 pt-8 dark:border-gray-700">
      <div className="col-start-1">
        <ContnetNavigationItem type="prev" content={prevContent} />
      </div>
      <div className="col-start-2">
        <ContnetNavigationItem type="next" content={nextContent} />
      </div>
    </div>
  );
};

export default ContentNavigation;
