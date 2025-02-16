import { FiLink } from 'react-icons/fi';

import { generateId } from '@/utils/generate-id';

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ as: Component, children, className }: HeadingProps) => {
  const id = generateId(children);

  return (
    <Component id={id} className={className}>
      <a href={`#${id}`} className="group inline-flex items-center gap-2">
        {children}
        <FiLink
          className="text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-300"
          size={16}
        />
      </a>
    </Component>
  );
};

export default Heading;
