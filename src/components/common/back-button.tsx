import { TbArrowBackUp } from 'react-icons/tb';

import Button from '../button';
import { ICommonButton } from '@/types/common-button';

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
