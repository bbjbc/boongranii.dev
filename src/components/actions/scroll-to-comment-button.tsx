import { BsChatText } from 'react-icons/bs';
import type { ICommonButton } from '@/types/common-button';
import Button from '../ui/button';

const ScrollToCommentButton = ({ size, className }: ICommonButton) => {
  const handleClick = () => {
    const commentElement = document.getElementById('giscus-comment');
    if (commentElement) {
      commentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button onClick={handleClick} variant="outline" className={className}>
      <BsChatText size={size} />
    </Button>
  );
};

export default ScrollToCommentButton;
