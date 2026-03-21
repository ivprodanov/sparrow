import React from 'react';

const Toggle = ({
  type = 'checkbox', // or 'radio'
  label,
  name,
  checked,
  onChange,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const baseClassNames = `toggle toggle-${type} toggle-${variant} toggle-${size}`;
  const combinedClasses = `${baseClassNames} ${className}`.trim();

  return (
    <label className={`toggle-label ${combinedClasses}`}>
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        className="toggle-input"
      />
      <span className="toggle-custom-mark"></span>
      {label && <span className="toggle-text">{label}</span>}
    </label>
  );
};

export default Toggle;