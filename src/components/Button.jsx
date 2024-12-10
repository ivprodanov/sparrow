import React from 'react';

const Button = ({
  children,
  variant = 'primary', // default variant
  size = 'md',         // default size
  disabled = false,
  onClick,
}) => {
  const classNames = `button button-${variant} button-${size}`;
  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
