import React from "react";

export const BarChart = ({ data = [], variant = "primary", className = "" }) => {
  return (
    <div className={`row align-items-end justify-content-between p-y-600 ${className}`} style={{ height: '200px', gap: '12px' }}>
      {data.map((item, index) => (
        <div key={index} className="column align-items-center" style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          
          {/* THE BAR: Height is controlled by the data value */}
          <div 
            className={`${variant}-500 radius-t-md shadow-sm transition-all`} 
            style={{ 
              height: `${item.value}%`, 
              width: '100%',
              minWidth: '20px',
              maxWidth: '40px'
            }}
          ></div>
          
          {/* THE LABEL */}
          <span className="text-neutral-500 fs-100 fw-700 m-t-200 uppercase" style={{ letterSpacing: '0.5px' }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};