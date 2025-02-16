import { cn } from '@/utils/cn';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'ghost' | 'outline';
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
    ghost: 'hover:text-black dark:hover:text-gray-100',
    outline:
      'border border-gray-300 dark:border-gray-600 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800',
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
