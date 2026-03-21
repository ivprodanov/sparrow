import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,         // Pass an SVG or icon component
  button        // Pass a fully formed Sparrow Button component
}) => {
  const baseClassNames = `input input-${variant} input-${size}`;
  const wrapperClasses = `input-wrapper ${className}`.trim();

  return (
    <div className={wrapperClasses}>
      {icon && <span className="input-icon">{icon}</span>}
      
      <input
        type={type}
        className={baseClassNames}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      
      {button && <div className="input-button-addon">{button}</div>}
    </div>
  );
};

export default Input;