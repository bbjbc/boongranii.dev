import * as runtime from 'react/jsx-runtime';

import { useMDXComponents } from './mdx-components';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
}

export const MDXContent = ({ code }: MDXProps) => {
  const components = useMDXComponents({});
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
