import { generateId } from './generate-id';

export const extractHeadings = (
  content: string,
): { id: string; text: string; level: number }[] => {
  const headingRegex = /<h([1-3])>([^<]+)<\/h[1-3]>/g;

  return Array.from(content.matchAll(headingRegex), match => {
    const level = Number.parseInt(match[1], 10);
    const text = match[2].trim();

    return { id: generateId(text), text, level };
  });
};
