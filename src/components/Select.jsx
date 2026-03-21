import React from 'react';

const Select = ({
  options = [],
  variant = 'primary',
  size = 'md',
  className = '',
  onChange
}) => {
  const baseClassNames = `select select-${variant} select-${size}`;
  const combinedClasses = `${baseClassNames} ${className}`.trim();

  return (
    <div className="select-wrapper">
      <select className={combinedClasses} onChange={onChange}>
        {/* Optional: Add a default disabled placeholder */}
        <option value="" disabled selected hidden>Choose an option...</option>
        
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;