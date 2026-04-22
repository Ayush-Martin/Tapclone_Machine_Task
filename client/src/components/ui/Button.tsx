import React, { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  rightIcon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-nunito-sans font-light transition-all duration-300 rounded-sm';
  
  const variants = {
    primary: 'bg-brand-green hover:bg-brand-green-dark text-text-primary border border-brand-green',
    outline: 'bg-transparent border border-brand-green text-text-primary hover:bg-brand-green/10',
    ghost: 'bg-transparent text-text-primary hover:text-brand-green',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
