import { VscGithubAlt } from 'react-icons/vsc';
import { CiMail } from 'react-icons/ci';

import { GITHUB_URL, GMAIL_URL } from '@/constants/path';

const Footer = () => {
  return (
    <footer className="container py-14">
      <div className="relative mb-6">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:hidden dark:via-gray-200" />
        <div className="absolute inset-x-0 top-0 hidden h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:block" />
      </div>

      <div className="mb-6 flex flex-col space-y-1">
        <h3 className="text-base font-semibold text-gray-600 dark:text-gray-300">
          Boongranii
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Where code meets creativity, <br />
          experiences come alive.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a
            href={GITHUB_URL}
            className="text-gray-600 transition-colors duration-300 hover:text-black dark:text-gray-300 dark:hover:text-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubAlt size={20} />
          </a>
          <a
            href={GMAIL_URL}
            className="text-gray-600 transition-colors duration-300 hover:text-black dark:text-gray-300 dark:hover:text-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiMail size={20} />
          </a>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2025 Boongranii. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
