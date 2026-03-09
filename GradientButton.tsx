import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const GradientButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = "relative overflow-hidden px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group";
  
  const variants = {
    primary: "bg-gradient-to-r from-dale-green to-dale-blue text-white shadow-lg shadow-dale-green/30 border border-transparent",
    secondary: "bg-dale-gold text-dale-blue shadow-lg shadow-dale-gold/30 border border-transparent",
    outline: "bg-transparent border-2 border-dale-green text-dale-green hover:bg-dale-green hover:text-white"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Shine effect container */}
      {variant !== 'outline' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
      
      {/* Border glow for primary */}
      {variant === 'primary' && (
         <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
      )}
    </button>
  );
};

export default GradientButton;