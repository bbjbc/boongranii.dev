import type { PropsWithChildren } from 'react';

const Description = ({ children }: PropsWithChildren) => {
  return (
    <p className="-mt-2 mb-4 text-xs font-semibold text-gray-500 sm:text-sm dark:text-gray-400">
      {children}
    </p>
  );
};

export default Description;
