import { LuArrowUpToLine } from 'react-icons/lu';

import Button from '../button';

const ScrollToTopBUtton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button onClick={handleScrollToTop} variant="outline">
      <LuArrowUpToLine size={14} />
    </Button>
  );
};

export default ScrollToTopBUtton;
