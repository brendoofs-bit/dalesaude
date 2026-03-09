import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
}

const GradientButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  fullWidth = false,
  href,
  ...props 
}) => {
  const baseClasses = "relative overflow-hidden !px-8 !py-4 !rounded-full !font-bold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 !inline-flex items-center justify-center gap-2 group !cursor-pointer !border-0";
  
  const variants = {
    primary: "!bg-gradient-to-r from-dale-green to-teal-500 !text-white shadow-lg",
    secondary: "!bg-gradient-to-r from-dale-gold to-yellow-500 !text-dale-blue shadow-lg",
    outline: "!bg-transparent !border-2 !border-solid !border-dale-green !text-dale-green hover:!bg-dale-green hover:!text-white"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? '!w-full' : ''} ${className}`}
      style={{ textDecoration: 'none' }}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
    </Component>
  );
};

export default GradientButton;