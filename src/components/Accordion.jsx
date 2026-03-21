import React, { useState } from "react";

export const Accordion = ({ children, title, variant = "neutral", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use your existing card-variant classes for the wrapper
  const containerClasses = `card card-${variant} accordion ${isOpen ? 'is-open' : ''} ${className}`.trim();

  return (
    <div className={containerClasses} style={{ padding: 0, marginBottom: '1rem', minHeight: 'auto' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="accordion--header w-full p-a-400 row justify-content-between align-items-center"
        style={{ background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', color: 'inherit' }}
      >
        <span className="fw-700 fs-300">{title}</span>
        <span className="accordion--icon" style={{ 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
          transition: 'transform 0.3s ease' 
        }}>
          ▼
        </span>
      </button>
      
      <div className="accordion--content p-x-400" style={{ 
        maxHeight: isOpen ? '500px' : '0px', 
        overflow: 'hidden', 
        transition: 'all 0.3s ease-in-out',
        opacity: isOpen ? 1 : 0,
        paddingBottom: isOpen ? '1.5rem' : '0px'
      }}>
        <div className="p-t-200 border-t-sm border-neutral-700">
          {children}
        </div>
      </div>
    </div>
  );
};