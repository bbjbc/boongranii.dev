import { PropsWithChildren } from 'react';

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="mb-4 text-2xl font-extrabold text-black dark:text-white sm:text-3xl">
      {children}
    </h1>
  );
};

export default Title;
