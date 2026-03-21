import React from 'react';

const Textarea = ({
  placeholder,
  value,
  onChange,
  rows = 4,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const baseClassNames = `textarea textarea-${variant} textarea-${size}`;
  const combinedClasses = `${baseClassNames} ${className}`.trim();

  return (
    <textarea
      className={combinedClasses}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  );
};

export default Textarea;