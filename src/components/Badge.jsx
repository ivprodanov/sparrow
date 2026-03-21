import React from "react";

export const Badge = ({ children, variant = "primary", className = "" }) => {
  // Use the standard variant classes from your _colors.scss loop
  const combinedClasses = `badge ${variant}-500 ${className}`.trim();

  return (
    <span className={combinedClasses}>
      {children}
    </span>
  );
};