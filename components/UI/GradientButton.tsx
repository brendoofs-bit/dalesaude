import React from 'react';

type BaseProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const GradientButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = "relative overflow-hidden px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer text-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-dale-green to-dale-blue text-white shadow-lg shadow-dale-green/30 border border-transparent",
    secondary: "bg-dale-gold text-dale-blue shadow-lg shadow-dale-gold/30 border border-transparent",
    outline: "bg-transparent border-2 border-dale-green text-dale-green hover:bg-dale-green hover:text-white"
  };

  const content = (
    <>
      {/* Shine effect container */}
      {variant !== 'outline' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none" />
      )}
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform shrink-0 flex items-center">{icon}</span>}
      </span>
      
      {/* Border glow for primary */}
      {variant === 'primary' && (
         <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
      )}
    </>
  );

  if ('href' in props && props.href) {
    const { href, target, rel, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
        className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...buttonProps}
    >
      {content}
    </button>
  );
};

export default GradientButton;
