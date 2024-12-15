import React from 'react';

const Button = ({
  children,
  variant = 'primary', // default variant
  size = 'md',         // default size
  disabled = false,
  onClick,
  stylings
}) => {
  const classNames = `button button-${variant} button-${size}`;
  return (
    <button className={stylings ? stylings : classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
