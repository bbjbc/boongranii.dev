import { cn } from '@/app/utils/cn';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

const Button = ({
  children,
  icon,
  className = '',
  variant = 'default',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'rounded-md p-2 text-gray-600 transition-all duration-300 dark:text-gray-300';
  const variantStyles = {
    default: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    outline:
      'border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800',
  };
  const combinedStyles = cn(baseStyles, variantStyles[variant], className);

  return (
    <button className={combinedStyles} {...props}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
