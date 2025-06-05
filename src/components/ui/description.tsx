import { PropsWithChildren } from 'react';

const Description = ({ children }: PropsWithChildren) => {
  return (
    <p className="-mt-2 mb-4 text-xs font-semibold text-gray-500 dark:text-gray-400 sm:text-sm">
      {children}
    </p>
  );
};

export default Description;
