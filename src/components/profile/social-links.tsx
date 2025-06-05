import { VscGithubAlt } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

import Button from '../ui/button';
import { GITHUB_URL, LINKEDIN_URL, GMAIL_URL } from '@/constants/path';

const SocialLinks = () => {
  return (
    <div className="mt-2 flex gap-2">
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
        <Button variant="outline">
          <VscGithubAlt size={16} />
        </Button>
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
        <Button variant="outline">
          <FaLinkedin size={16} />
        </Button>
      </a>
      <a href={GMAIL_URL}>
        <Button variant="outline">
          <CiMail size={16} />
        </Button>
      </a>
    </div>
  );
};

export default SocialLinks;
