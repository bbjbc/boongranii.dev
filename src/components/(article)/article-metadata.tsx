import { CiStopwatch } from 'react-icons/ci';

import { formatDate } from '@/utils/format-date';

interface ArticleMetadataProps {
  date: string;
  readingTime: number;
}

const ArticleMetadata = ({ date, readingTime }: ArticleMetadataProps) => {
  return (
    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
      <span>{formatDate(date)}</span>
      <div className="flex items-center gap-0.5">
        <CiStopwatch size={16} />
        <time>{readingTime}분 소요</time>
      </div>
    </div>
  );
};

export default ArticleMetadata;
