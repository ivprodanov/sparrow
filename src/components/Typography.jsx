import React from 'react';

export const Heading = ({ level = "1", children, className = '' }) => {
  // Ensure level is a valid heading number (1-6)
  const safeLevel = /^[1-6]$/.test(level) ? level : "1";
  const Tag = `h${safeLevel}`; 
  
  return <Tag className={className}>{children}</Tag>;
};

export const Paragraph = ({ children, className = '' }) => {
  return <p className={className}>{children}</p>;
};