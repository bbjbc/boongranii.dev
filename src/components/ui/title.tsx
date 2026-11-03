import type { PropsWithChildren } from 'react';

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="mb-4 text-2xl font-extrabold text-black sm:text-3xl dark:text-white">
      {children}
    </h1>
  );
};

export default Title;
