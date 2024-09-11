// import core package
import React, { ButtonHTMLAttributes, FC } from 'react';

// import cn
import { cn } from '@/lib/utils';

// Define custom props separately
interface CustomButtonProps {
  content: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

// combining custom props with the standard button attributes
type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const BtnPrimary: FC<ButtonProps> = ({
  content,
  className,
  ...rest // Capture the rest of the button native props
}) => {
  return (
    <button
      {...rest} // Spread the rest of the native button props here
      className={cn(
        'py-3 px-6 hover:shadow-md hover:shadow-primary/50 rounded-lg text-base md:text-xl duration-500 bg-primary text-white font-semibold border border-primary',
        className,
      )}
    >
      {content}
    </button>
  );
};

export default BtnPrimary;
