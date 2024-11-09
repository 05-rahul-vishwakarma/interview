import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';  // Added 'type' prop for button types
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  style,
  disabled = false,
  className,
  type = 'button', // Default to 'button' if not specified
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={`custom-button ${className ? className : ''}`}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
