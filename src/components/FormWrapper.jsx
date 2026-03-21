import React from 'react';

const FormWrapper = ({
  children,
  className = '',
  onSubmit
}) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload by default
    if (onSubmit) onSubmit(e);
  };

  const combinedClasses = `form-wrapper ${className}`.trim();

  return (
    <form className={combinedClasses} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default FormWrapper;