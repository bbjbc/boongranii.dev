interface AboutContentProps {
  paragraphs: string[];
}

const AboutContent = ({ paragraphs }: AboutContentProps) => {
  return (
    <div className="space-y-2">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default AboutContent;
