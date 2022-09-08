import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  style?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  type = "button",
  style,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type={ type }
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor, ...style }}
      {...props}
    >
      {label}
    </button>
  );
};
