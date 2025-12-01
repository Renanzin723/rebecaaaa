import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  isLoading, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-200 focus:ring-rose-500",
    secondary: "bg-stone-800 text-white hover:bg-stone-700 shadow-lg shadow-stone-300 focus:ring-stone-500",
    outline: "border-2 border-stone-300 text-stone-600 hover:border-rose-400 hover:text-rose-600 bg-transparent focus:ring-rose-500"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Carregando...
        </>
      ) : children}
    </button>
  );
};