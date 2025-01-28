import { PropsWithChildren } from 'react';

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="mb-4 text-lg font-extrabold text-gray-600 dark:text-gray-200 sm:text-xl">
      {children}
    </h1>
  );
};

export default Title;
