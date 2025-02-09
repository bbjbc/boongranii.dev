import { TbArrowBackUp } from 'react-icons/tb';

import Button from '../button';

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <Button onClick={handleBack} variant="outline">
      <TbArrowBackUp size={14} />
    </Button>
  );
};

export default BackButton;
