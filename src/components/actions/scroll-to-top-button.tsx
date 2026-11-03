import { LuArrowUpToLine } from 'react-icons/lu';
import type { ICommonButton } from '@/types/common-button';
import Button from '../ui/button';

const ScrollToTopBUtton = ({ size, className }: ICommonButton) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button onClick={handleScrollToTop} variant="outline" className={className}>
      <LuArrowUpToLine size={size} />
    </Button>
  );
};

export default ScrollToTopBUtton;
