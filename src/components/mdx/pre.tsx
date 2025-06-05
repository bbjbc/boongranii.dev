'use client';

import { useRef, useState } from 'react';

import { IoClipboardOutline } from 'react-icons/io5';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import Button from '../ui/button';

interface PreProps {
  children?: React.ReactNode;
  props?: React.HTMLAttributes<HTMLPreElement>;
}

const Pre = ({ children, ...props }: PreProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const text = preRef.current?.innerText;
    await navigator.clipboard.writeText(text || '');

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <Button
        onClick={handleCopy}
        variant="outline"
        icon={
          isCopied ? (
            <div className="flex items-center gap-1">
              <span className="text-xs">Copied!</span>
              <IoCheckmarkDoneOutline />
            </div>
          ) : (
            <IoClipboardOutline />
          )
        }
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100"
      />
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
};

export default Pre;
