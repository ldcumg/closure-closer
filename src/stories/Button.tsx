import './button.css';
import React from 'react';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset' /** Is this the principal call to action on the page? */;
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Additional class names for custom styling */
  className?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  type,
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type={type}
      className={['storybook-button', `storybook-button--${size}`, mode, className].join(' ')} // className 추가
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
