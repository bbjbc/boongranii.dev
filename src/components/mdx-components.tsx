import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, props }) => (
      <h1
        className="mb-4 text-2xl font-extrabold tracking-tight text-black dark:text-white sm:text-3xl"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, props }) => (
      <h2
        className="mb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, props }) => (
      <h3
        className="{...props} mb-2 text-lg font-extrabold text-black dark:text-white sm:text-xl"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, props }) => (
      <p className="{...props} mb-4 text-base" {...props}>
        {children}
      </p>
    ),
    a: ({ children, props }) => (
      <a
        className="cursor-pointer font-semibold text-blue-500 decoration-2 underline-offset-2 transition-colors hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
        {...props}
        target="_blank"
      >
        {children}
      </a>
    ),
    ul: ({ children, props }) => (
      <ul className="mb-2 ml-4 list-inside list-disc leading-loose" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, props }) => (
      <ol
        className="mb-2 ml-4 list-inside list-decimal leading-loose"
        {...props}
      >
        {children}
      </ol>
    ),
    code: props => (
      <code
        className="rounded-md bg-gray-200 px-1.5 py-0.5 dark:bg-gray-700"
        {...props}
        {...props}
      />
    ),
    blockquote: ({ children, props }) => (
      <blockquote
        className="mb-4 border-l-4 border-gray-600 py-2 pl-4 italic text-black dark:border-gray-300 dark:text-white [&>p]:mb-0"
        {...props}
      >
        {children}
      </blockquote>
    ),
    img: ({ src, alt }) => (
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        className="mb-6 rounded-md shadow-lg dark:shadow-gray-800"
      />
    ),
    hr: props => (
      <hr className="my-6 border-gray-300 dark:border-gray-600" {...props} />
    ),
  };
}
