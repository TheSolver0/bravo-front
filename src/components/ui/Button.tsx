import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border-2 border-primary/20 text-primary hover:bg-primary/5',
    ghost: 'text-on-surface-variant hover:bg-surface-container-low',
  };
  return (
    <button 
      {...props}
      className={`px-4 py-2 rounded-lg font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100`}
    >
      {children}
    </button>
  );
};
