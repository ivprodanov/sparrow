import React from "react";

export const Breadcrumb = ({ items = [], variant = "neutral", className = "" }) => {
  return (
    <nav className={`breadcrumb text-${variant}-500 ${className}`} aria-label="Breadcrumb">
      <ol className="row align-items-center" style={{ listStyle: 'none', padding: 0, gap: '8px' }}>
        {items.map((item, index) => (
          <li key={index} className="row align-items-center" style={{ gap: '8px' }}>
            <a 
              href={item.link} 
              className={`text-decoration-none fs-200 fw-500 ${index === items.length - 1 ? 'text-light pointer-events-none' : 'text-neutral-500 hover-primary-400'}`}
            >
              {item.label}
            </a>
            {index < items.length - 1 && (
              <span className="text-neutral-700 fs-100">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};