import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className // Changed from 'stylings'
}) => {
  // Always apply base classes, then attach any custom modifiers at the end
  const baseClassNames = `button button-${variant} button-${size}`;
  const combinedClasses = `${baseClassNames} ${className || ""}`.trim();

  return (
    <button className={combinedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;