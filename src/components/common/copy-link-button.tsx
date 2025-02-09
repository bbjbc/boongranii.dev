import { IoCopyOutline } from 'react-icons/io5';

import Button from '../button';

const CopyLinkButton = () => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <Button onClick={handleCopyLink} variant="outline">
      <IoCopyOutline size={14} />
    </Button>
  );
};

export default CopyLinkButton;
