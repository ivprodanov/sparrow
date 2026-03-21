import React, { useState } from "react";

export const Tabs = ({ items = [], variant = "primary", className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // items is an array of { label: "Tab 1", content: <Element /> }
  const containerClasses = `tabs ${variant}-tabs ${className}`.trim();

  return (
    <div className={containerClasses}>
      {/* TAB TRIGGERS */}
      <div className="tabs--header row m-b-400 border-b-sm border-neutral-800" style={{ gap: '24px' }}>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-y-300 fs-300 fw-700 pointer transition-all ${activeIndex === index ? `text-${variant}-400 border-b-sm border-${variant}-500` : 'text-neutral-500 border-b-sm border-transparent'}`}
            style={{ background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none', outline: 'none' }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ACTIVE CONTENT PANEL */}
      <div className="tabs--content animate-fade-in">
        {items[activeIndex]?.content}
      </div>
    </div>
  );
};