"use client";
import { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger';
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
};

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const classes = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;
  return <button className={classes} disabled={disabled} {...props} />;
};

export default Button;