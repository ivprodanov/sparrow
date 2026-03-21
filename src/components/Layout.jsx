import React from 'react';

export const Container = ({ children, className = '' }) => {
  // Your _grid.scss already handles the 'container' class perfectly
  const combinedClasses = `container ${className}`.trim();
  return <div className={combinedClasses}>{children}</div>;
};

export const Row = ({ children, className = '' }) => {
  // Your _grid.scss applies flex-wrap and gap handling to 'row'
  const combinedClasses = `row ${className}`.trim();
  return <div className={combinedClasses}>{children}</div>;
};

export const Column = ({ children, sizeClass, className = '' }) => {
  // If the user didn't specify a size (like "half" or "third"), default to the flex-grow 'col' class
  const baseColClass = sizeClass || 'col'; 
  const combinedClasses = `${baseColClass} ${className}`.trim();
  
  return <div className={combinedClasses}>{children}</div>;
};