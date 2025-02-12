interface QuoteProps {
  text: string;
  translation: string;
  author: string;
}

const Quote = ({ text, translation, author }: QuoteProps) => {
  return (
    <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-800/50">
      <strong className="font-serif text-lg font-semibold italic tracking-tight">
        &quot;{text}&quot;
      </strong>
      <p className="mt-3 text-gray-600 dark:text-gray-300">{translation}</p>
      <div className="text-right">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          - by {author}
        </span>
      </div>
    </div>
  );
};

export default Quote;
