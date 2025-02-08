import { generateId } from './generate-id';

export const extractHeadings = (
  content: string,
): { id: string; text: string; level: number }[] => {
  const headingRegex = /<h([1-3])>([^<]+)<\/h[1-3]>/g;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].trim();

    const id = generateId(text);

    headings.push({
      id,
      text,
      level,
    });
  }

  return headings;
};
