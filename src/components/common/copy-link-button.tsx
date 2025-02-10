import { IoCopyOutline } from 'react-icons/io5';
import { toast } from 'sonner';

import Button from '../button';
import { ICommonButton } from '@/types/common-button';

const CopyLinkButton = ({ size, className }: ICommonButton) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast.success('현재 링크가 클립보드에 복사됐어요.');
    });
  };

  return (
    <Button onClick={handleCopyLink} variant="outline" className={className}>
      <IoCopyOutline size={size} />
    </Button>
  );
};

export default CopyLinkButton;
