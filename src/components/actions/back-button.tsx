import { TbArrowBackUp } from 'react-icons/tb';
import type { ICommonButton } from '@/types/common-button';
import Button from '../ui/button';

const BackButton = ({ size, className }: ICommonButton) => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <Button onClick={handleBack} variant="outline" className={className}>
      <TbArrowBackUp size={size} />
    </Button>
  );
};

export default BackButton;
