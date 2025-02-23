import {
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineClose,
  AiOutlineBulb,
} from 'react-icons/ai';

import { cn } from '@/utils/cn';

interface CalloutType {
  icon: React.ComponentType<{ size: number; className?: string }>;
  className: string;
  titleClassName: string;
}

interface CalloutTypes {
  [key: string]: CalloutType;
}

const calloutTypes: CalloutTypes = {
  note: {
    icon: AiOutlineInfoCircle,
    className: 'bg-green-100 border-green-200',
    titleClassName: 'text-green-800',
  },
  warning: {
    icon: AiOutlineWarning,
    className: 'bg-orange-100 border-orange-200',
    titleClassName: 'text-yellow-800',
  },
  danger: {
    icon: AiOutlineClose,
    className: 'bg-red-200 border-red-300',
    titleClassName: 'text-red-800',
  },
  info: {
    icon: AiOutlineBulb,
    className: 'bg-blue-100 border-blue-200',
    titleClassName: 'text-blue-800',
  },
};

interface CalloutProps {
  type?: keyof typeof calloutTypes;
  title?: string;
  children?: React.ReactNode;
}

const Callout = ({ type = 'note', title, children }: CalloutProps) => {
  const calloutType = calloutTypes[type] || calloutTypes.note;
  const Icon = calloutType.icon;

  return (
    <div className={cn('my-4 rounded-lg border', calloutType.className)}>
      <div className="flex items-center gap-2 px-4 py-3">
        <Icon size={20} className={calloutType.titleClassName} />
        {title && (
          <p
            className={cn(
              'font-semibold [&>p]:mb-0',
              calloutType.titleClassName,
            )}
          >
            {title}
          </p>
        )}
      </div>

      {children && (
        <div className="rounded-b-lg bg-white p-4 text-gray-600 dark:bg-gray-800 dark:text-gray-300 [&>p]:mb-0">
          {children}
        </div>
      )}
    </div>
  );
};

export default Callout;
